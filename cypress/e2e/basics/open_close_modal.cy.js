describe('opening and closing tasks modal management', () => {
    
    it('should open and close the new task function using backdrop', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('.backdrop').click({ force: true })
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
    })

    it('should open and close the new task function using cancel button', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('[type="button"]').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('[type="button"]').should('not.exist')
        cy.get('.modal').should('not.exist')
    })

})