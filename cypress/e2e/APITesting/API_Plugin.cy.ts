describe("HTTP apis",()=>{

    it("Get api",()=>{
    cy.api('GET','https://jsonplaceholder.typicode.com/users/1')
    .its('status')
    .should('equal',200)
    
    })
    
    it("Post api",()=>{
    cy.api({
       method:'POST',
       url:'https://jsonplaceholder.typicode.com/posts/',
       body:{
            userId: 1,
            title: "Post Test Demo",
            body: "This is a post call for demo purpose for cypress API testing"
       }
    })
    .its('status')
    .should('eq',201)
    })
     
    it("Put api",()=>{
     
        cy.fixture('requestBody').then((data)=>{
    const reqBody =data
    
        cy.api({
           method:'PUT',
           url:'https://jsonplaceholder.typicode.com/posts/1',
           body:reqBody
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.userId).to.eq(reqBody.userId)
            expect(response.body.title).to.eq(reqBody.title)
        })
    }) })
    
    it("Patch api",()=>{
        cy.api({
           method:'PATCH',
           url:'https://jsonplaceholder.typicode.com/posts/1',
           body:{
                userId: 1,
                id: 101,
                title: "Post Test Demo-updated"
           }
        })
        .then((response)=>{
            expect(response.body.title).to.equal("Post Test Demo-updated")
    
        })
    })
    
    it("Delete api",()=>{
        cy.api('DELETE','https://jsonplaceholder.typicode.com/users/1')
        .its('status')
        .should('equal',200)
        
        })
    
    it('Query Parameters',()=>{
        cy.api({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/comments',
            qs:{ postId : 1}
         })
         .then((response)=>{
             expect(response.status).equal(200)
             expect(response.body).has.length(5)
             expect(response.body[0]).have.property("email","Eliseo@gardner.biz")
         })
    
    
    
    })
     
    
    })