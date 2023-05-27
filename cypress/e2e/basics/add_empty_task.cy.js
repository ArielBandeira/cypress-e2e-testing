describe('adding empty tasks management', () => {
    
    it('should not create a task with empty fields', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('.modal').contains('Add Task').click()
        cy.get('.error-message').contains('Please provide values for task title, summary and category!')
        cy.get('.modal').should('exist')
    })

    it('should not create a task with empty title', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#summary').type('Hello World Study Cypress')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.error-message').contains('Please provide values for task title, summary and category!')
        cy.get('.modal').should('exist')
    })

    it('should not create a task with empty summary', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.error-message').contains('Please provide values for task title, summary and category!')
        cy.get('.modal').should('exist')
    })

})