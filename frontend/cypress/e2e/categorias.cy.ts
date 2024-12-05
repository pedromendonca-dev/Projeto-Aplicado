describe('MainBody Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/categorias'); 
    });
  
    it('should display the correct category cards', () => {
      cy.contains('Limpeza Residencial').should('be.visible');
      cy.contains('Jardinagem e Paisagismo').should('be.visible');
      cy.contains('Construção e Reforma').should('be.visible');
      cy.contains('Serviços de Mudança').should('be.visible');
      cy.contains('Reparo elétrico').should('be.visible');
      cy.contains('Limpeza de Piscinas').should('be.visible');
    });
  
    it('should navigate to the category details page when a category is clicked', () => {
      cy.contains('Limpeza Residencial').click();
      cy.url().should('include', '/categorias/detalhes');
      cy.contains('Foto').should('be.visible'); 
    });
  });
  