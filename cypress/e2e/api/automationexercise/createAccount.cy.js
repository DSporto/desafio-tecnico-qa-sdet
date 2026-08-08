const Ajv = require("ajv");
const schema = require("../../../schemas/createAccount.schema.json");

describe("API-02 - POST Automation Exercise - Criar conta", () => {
  const endpoint = Cypress.env("API_CREATE_ACCOUNT_URL");


  before(() => {
    expect(
      endpoint,
      "API_CREATE_ACCOUNT_URL configurada"
    ).to.exist;
  });


  const validarSchema = (body) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    const valid = validate(body);

    expect(
      valid,
      `Schema inválido: ${JSON.stringify(validate.errors)}`
    ).to.eq(true);
  };

  it("deve criar uma conta com dados únicos", () => {
    const uniqueEmail = `qa_${Date.now()}@example.com`;

    cy.request({
      method: "POST",
      url: endpoint,
      form: true,
      failOnStatusCode: false,
      body: {
        name: "QA Test User",
        email: uniqueEmail,
        password: "Teste@123",
        title: "Mr",
        birth_date: "10",
        birth_month: "5",
        birth_year: "1990",
        firstname: "QA",
        lastname: "Tester",
        company: "HCX Test",
        address1: "Rua Teste 123",
        address2: "Apto 1",
        country: "United States",
        zipcode: "10001",
        state: "New York",
        city: "New York",
        mobile_number: "11999999999"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("string");

      const body = JSON.parse(response.body);

      validarSchema(body);

      expect(body.responseCode).to.eq(201);
      expect(body.message).to.eq("User created!");
    });
  });

  it("deve rejeitar criação de conta sem e-mail", () => {
    cy.request({
      method: "POST",
      url: endpoint,
      form: true,
      failOnStatusCode: false,
      body: {
        name: "QA Test User",
        password: "Teste@123"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("string");

      const body = JSON.parse(response.body);

      validarSchema(body);

      expect(body.responseCode).to.not.eq(201);
      expect(body.message).to.exist;
    });
  });
});