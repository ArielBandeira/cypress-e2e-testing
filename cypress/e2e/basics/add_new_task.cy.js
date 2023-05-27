describe('adding tasks management', () => {
    
    it('should create a new task with moderate category', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.get('.task').should('have.length', 1)
        cy.get('.task h2').contains('Hello World Study Cypress')
        cy.get('.task p').contains('Hello World Study Cypress Summary')
    })

    it('should create a new task with urgent category', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('urgent')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.get('.task').should('have.length', 1)
        cy.get('.task h2').contains('Hello World Study Cypress')
        cy.get('.task p').contains('Hello World Study Cypress Summary')
    })

    it('should create a new task with important category', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('important')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.get('.task').should('have.length', 1)
        cy.get('.task h2').contains('Hello World Study Cypress')
        cy.get('.task p').contains('Hello World Study Cypress Summary')
    })

    it('should create a new task with low category', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('low')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.get('.task').should('have.length', 1)
        cy.get('.task h2').contains('Hello World Study Cypress')
        cy.get('.task p').contains('Hello World Study Cypress Summary')
    })

})