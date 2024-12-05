describe("Login", () => {
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
  });

  it("Login with valid credentials", () => {
    cy.get('input[name="email"]').type(user.valid.email);

    cy.get('input[name="password"]').type(user.valid.password);

    cy.contains("button", "Entrar").click();

    cy.url().should("include", "/categorias");
  });

  it("Login with invalid credentials", () => {
    cy.get('input[name="email"]').type(user.invalid.email);
    cy.get('input[name="password"]').type(user.invalid.password);

    cy.contains("button", "Entrar").click();

    cy.contains("Usuário não encontrado").should("be.visible");
  });
});
