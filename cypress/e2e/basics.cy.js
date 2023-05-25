/// <reference types="Cypress" />

describe('tasks page', () => {
  
  it('Display main page', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.main-header').find('img')
  })

  it('Verify main page title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').should('have.length', 1)
    cy.get('h1').contains('My Cypress Course Tasks')
  })

})