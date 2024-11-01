describe('Issue deleting', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
      cy.visit(url + '/board');
      cy.contains('This is an issue of type: Task.').click();
      const getIssueDetailsModal = () => cy.get('[data-testid="modal:issue-details"]');
    });
  });

  it.only('TC 1. Should delete the issue', () => {
    const getIssueDetailsModal = () => cy.get('[data-testid="modal:issue-details"]');
    getIssueDetailsModal()
          .within(() => {
      cy.get('[data-testid="icon:trash"]')
          .trigger('mouseover')
          .click();
      cy.get('[data-testid="modal:confirm"')
          .should('be.visible')
          .contains('Are you sure you want to delete this issue?');
      cy.get('[data-testid="modal:confirm"]')
          .within(() => {
      cy.contains("button","Delete issue")
        .trigger('mouseover')
        .click();
      cy.get('[data-testid="modal:confirm"]')
          .should('not.exist');
      cy.get('[data-testid="modal:issue-details"]')
          .should('not.exist');
      cy.reload();
      cy.contains('This is an issue of type:Task')
          .should('not.exist')

  });
});

  it('TC 2. Should cancel the issue deletion', () => {
    const getIssueDetailsModal = () => cy.get('[data-testid="modal:issue-details"]');
    getIssueDetailsModal()
      cy.get('[data-testid="icon:trash"]')
        .trigger('mouseover')
        .click();
      cy.get('[data-testid="modal:confirm"]')
        .should('exist')
        .contains('Are you sure you want to delete this issue')
      cy.get('[data-testid="modal:confirm"]').within(() => {
      cy.contains("button","Cancel")
        .trigger('mouseover')
        .click();
      cy.get('[data-testid="modal:confirm"]')
          .should("not.exist");
      cy.get('[data-testid="modal:issue-details"]')
          .should("be.visible");
});        
      getIssueDetailsModal().within (() => {
      cy.get ('[data-testid="icon:close"]')
          .click();
      cy.get('[data-testid="modal:confirm"]')
          .should('not.exist')
      cy.get('[data-testid="modal:issue-details"]')
          .should('exist')
});
      getIssueDetailsModal().within (() => {
      cy.get('[data-testid="icon:close"]')
      .click()
    });
  });
});
});


