describe("HTTP Requests",()=>{

it("Get Request",()=>{
cy.request('GET','https://jsonplaceholder.typicode.com/users/1')
.its('status')
.should('equal',200)

})

it("Post Request",()=>{
cy.request({
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
 
it("Put Request",()=>{
 
    cy.fixture('requestBody').then((data)=>{
const reqBody =data

    cy.request({
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

it("Patch Request",()=>{
    cy.request({
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

it("Delete Request",()=>{
    cy.request('DELETE','https://jsonplaceholder.typicode.com/users/1')
    .its('status')
    .should('equal',200)
    
    })

it('Query Parameters',()=>{
    cy.request({
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