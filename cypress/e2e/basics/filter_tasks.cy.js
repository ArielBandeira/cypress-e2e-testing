describe('filtering tasks management', () => {
    
    it('should various new tasks with different categories', () => {
        //Should have 
        
        //3 with low category
        //3 with moderate category
        //4 with important category
        //2 with urgent category

    //--------------DATA SETUP-----------------------------------
    //should create three new tasks with moderate category
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('.modal').contains('Add Task').click()

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('.modal').contains('Add Task').click()

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('.modal').contains('Add Task').click()

    //should create two new tasks with urgent category

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('urgent')
        cy.get('.modal').contains('Add Task').click()
        
        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('urgent')
        cy.get('.modal').contains('Add Task').click()

    //should create four new tasks with important category

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('important')
        cy.get('.modal').contains('Add Task').click()

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('important')
        cy.get('.modal').contains('Add Task').click()

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('important')
        cy.get('.modal').contains('Add Task').click()

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('important')
        cy.get('.modal').contains('Add Task').click()

    //should create three new tasks with low category'

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('low')
        cy.get('.modal').contains('Add Task').click()

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('low')
        cy.get('.modal').contains('Add Task').click()

        cy.contains('Add Task').click()
        cy.get('#title').type('Hello World Study Cypress')
        cy.get('#summary').type('Hello World Study Cypress Summary')
        cy.get('#category').select('low')
        cy.get('.modal').contains('Add Task').click()

    //--------------FINISH DATA SETUP-----------------------------------
        
    //Verify if low has the right amout of tasks
        cy.get('#filter').select('low')
        cy.get('.task').should('have.length', 3)

    //Verify if moderate has the right amout of tasks
        cy.get('#filter').select('moderate')
        cy.get('.task').should('have.length', 3)

    //Verify if important has the right amout of tasks
        cy.get('#filter').select('important')
        cy.get('.task').should('have.length', 4)
    
    //Verify if urgent has the right amout of tasks
        cy.get('#filter').select('urgent')
        cy.get('.task').should('have.length', 2)

    //Verify if all has the right amout of tasks
        cy.get('#filter').select('all')
        cy.get('.task').should('have.length', 12)
    })

})