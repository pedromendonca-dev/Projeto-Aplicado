describe("FeatureTable Component", () => {
  const user = {
    baseUrl: "http://localhost:3000",
    valid: {
      email: "mariannegomesm@gmail.com",
      password: "teste123",
    },
    invalid: {
      email: "invalidemail@gmail.com",
      password: "invalidpassword",
    },
  };

  beforeEach(() => {
    cy.visit(user.baseUrl);

    cy.get('input[name="email"]').type(user.valid.email);
    cy.get('input[name="password"]').type(user.valid.password);

    cy.contains("button", "Entrar").click();
    cy.url().should("include", "/categorias");
    cy.contains("Limpeza Residencial").click();
  });

  it("should display at least one item in the table", () => {
    cy.get("table").find("tr").should("have.length.greaterThan", 1);
  });
});
