describe('Intercept concept',()=>{

it('simple Intercept',()=>{

    cy.visit('https://dummyapi.io/explorer')
    cy.intercept({
        url:'https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
    }).as('commentList')

    cy.contains('Comments List').click()
    cy.wait('@commentList').then((intercept) => {
        const resp = intercept.response
        expect(resp?.body.limit).equal(10)
    })
})
//stubbing--->
it('Mocking data',()=>{

    cy.visit('https://dummyapi.io/explorer')
    cy.intercept('GET','https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{limit:5,org:'ZemosoTech',name:'Mohana priya',email:'mgopalakrishan@gmail.com'}
    ).as('commentList')

    cy.contains('Comments List').click()
    cy.wait('@commentList').then((intercept) => {
        const resp = intercept.response
        expect(resp?.body.limit).not.equal(10)
        expect(resp?.body.name).eq('Mohana priya')
    })
})
it('Mocking data using fixture',()=>{

    cy.visit('https://dummyapi.io/explorer')
    cy.intercept('GET','https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{fixture:'newAddress.json'})
    .as('commentList')

    cy.contains('Comments List').click()
    cy.wait('@commentList').then((intercept) => {
        const resp = intercept.response
        expect(resp?.body.postal).not.equal(10)
        expect(resp?.body.name).eq('ZEMOSO')
    })
})



})