const Ajv = require("ajv");
const schema = require("../../../schemas/trelloAction.schema.json");

describe("API-01 - GET Trello", () => {
  it("deve consultar uma action e validar status, estrutura e contrato", () => {
    const actionId = Cypress.env("TRELLO_ACTION_ID");

    

    expect(actionId, "TRELLO_ACTION_ID configurado").to.exist;

    cy.request({
      method: "GET",
      url: `https://api.trello.com/1/actions/${actionId}`,
      failOnStatusCode: false,
    }).then((response) => {
      // Validação do status HTTP
      expect(response.status).to.eq(200);

      // Validação básica da estrutura
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.have.property("list");
      expect(response.body.data.list).to.have.property("name");

      cy.log(`list.name: ${response.body.data.list.name}`);

      // Validação do contrato utilizando JSON Schema
      const ajv = new Ajv();
      const validate = ajv.compile(schema);

      const valid = validate(response.body);

      if (!valid) {
        cy.log(JSON.stringify(validate.errors));
      }

      expect(
        valid,
        `Schema inválido: ${JSON.stringify(validate.errors)}`
      ).to.eq(true);
    });
  });
});