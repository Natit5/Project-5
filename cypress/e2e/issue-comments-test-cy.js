describe('Issue comments creating, editing and deleting', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
            cy.visit(url + '/board');
            
        });
    });

// Define variable selectors as const
const addCommentSelector = '[data-testid=issue-comment]';
const textareaSelector = '[placeholder="Add a comment..."]';
const saveButtonSelector = 'button:contains("Save")';
const issueCommentSelector = '[data-testid="Comments"]';
const getIssueDetailsModal = ('[data-testid="modal:issue-details"]');
const TEST_COMMENT = 'Write something in the comment field'

    it.only('Should create a comment successfully', () => {
        getIssueDetailsModal().within(() => {
            cy.get(issueCommentSelector);
        cy.get(textareaSelector).type(TEST_COMMENT);    
        cy.get(saveButtonSelector).click();
  });
});
});