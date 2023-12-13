
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
/// <reference types='Cypress' />

import cypress = require("cypress");

declare global {
    namespace Cypress {
      interface Chainable<Subject = any> {
        customCommand(param: string): Chainable<any>;
        login(username: string, password: string): Chainable<any>;
      loginoff():Chainable<any>
      }
    }
  }
Cypress.Commands.add('login',(username:string,password:string)=>{
  cy.clock()
    cy.session([],()=>{
        cy.visit('/')
        cy.get('#nav-link-accountList-nav-line-1').trigger("mouseover").click()
        cy.get('#username').type(username);
            cy.get('#continue')
            cy.get('#ap_password').type(password)
            cy.get('#signInSubmit')
            cy.tick(3000)
    })  

})

Cypress.Commands.add('loginoff', () => {
    cy.clock()
    cy.session([],()=>{
        cy.visit('/')
        cy.get('#nav-link-accountList-nav-line-1').trigger("mouseover").click()
        cy.fixture('/Credentials.json').then((data)=>{
            cy.get('#ap_email',data.email)
            cy.get('#continue')
            cy.get('#ap_password',data.password)
            cy.get('#signInSubmit')
            cy.tick(3000)
    })  
},
{
    cacheAcrossSpecs:true
})
})
