describe('Using different config files',()=>{
 it('test for different config',()=>{

    cy.visit('')
    cy.log('Print the env variable',Cypress.env('username'))
    cy.intercept(' https://play.google.com/log?format=json&hasfast=true').as('req')
    cy.wait('@req').then(response=>{
        expect(response.response?.statusCode).equal(200)
    })
 })

it('using env',()=>{

    cy.visit(Cypress.env('QA_Url'))
    cy.title().should('include', 'Facebook - உள்நுழையவும் அல்லது பதிவுசெய்யவும்')



})


})