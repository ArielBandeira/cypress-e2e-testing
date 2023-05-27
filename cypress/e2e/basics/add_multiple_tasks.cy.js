describe('multiple tasks management', () => {
    
    it('should add multiple tasks', () => {
        
        cy.visit('http://localhost:5173/')
        
        cy.contains('Add Task').click()
        cy.get('#title').type('Task 1')
        cy.get('#summary').type('Task 1 Summary')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.task').should('have.length', 1)

        cy.contains('Add Task').click()
        cy.get('#title').type('Task 2')
        cy.get('#summary').type('Task 2 Summary')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.task').should('have.length', 2)

        cy.get('.task').eq(0).contains('Task 1')
        cy.get('.task').eq(1).contains('Task 2')
        
    })

})