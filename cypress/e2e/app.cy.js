describe('template spec', () => {
  beforeEach(function () {
      cy.visit('http://localhost:8888')
  })
  it('should add three todo items', () => {
      // add todo items
      cy.get('.new-todo').type('Make every second count{enter}')
      cy.get('.new-todo').type('Invest in yourself{enter}')
      cy.get('.new-todo').type('Learn Cypress{enter}')
      cy.get('.todo-list').children().should('have.length', 3)
      // check if items were added
      cy.get('.todo-count').contains('3 items left')
      cy.get('.todo-list').children().eq(0).find('label').should('contain', 'Make every second count')
      cy.get('.todo-list').children().eq(1).find('label').should('contain', 'Invest in yourself')
      cy.get('.todo-list').children().eq(2).find('label').should('contain', 'Learn Cypress')
      // we mark Learn Cypress Complete
      cy.contains('.todo-list label', 'Learn Cypress').siblings('.toggle').click()
      // verify if the item is marked as completed by checking the
      cy.get('.todo-list').children().eq(2).should('have.class', 'completed')
  })
})