function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 12);
  return `${randomString}@example.com`;
}

describe("Sign Up", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/cadastro");
  });

  it("Should fill out the registration form and submit", () => {
    const randomEmail = generateRandomEmail();

    cy.get('input[name="name"]').type("Marianne Gomes");

    cy.get('input[name="email"]').type(randomEmail);

    cy.get('input[name="phone"]').type("123456789");

    cy.get("#mui-component-select-type_user").click();
    cy.get('li[data-value="client"]').click();

    cy.get('input[name="password"]').type("senha123");

    cy.get("button").contains("Finalizar cadastro").click();

    cy.contains("Usuário cadastrado com sucesso").should("be.visible");
  });
});
