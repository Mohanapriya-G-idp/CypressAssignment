import { any } from "cypress/types/bluebird"

describe('Authentications',()=>{
    const token = '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'
    let Auth:any;
    it("Basic Auth",()=>{
       cy.request(
        { method:'GET',
          url:'https://postman-echo.com/basic-auth',
          auth:{
             user:'postman',
             pass:'password'
          }
       }).its('status')
       .should('equal',200)
    })
    it("Digest Auth",()=>{
        cy.request(
         { method:'GET',
           url:'https://postman-echo.com/basic-auth',
           auth:{
              username:'postman',
              password:'password',
              method: 'digest'
           }
        }).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.authenticated).to.eq(true)
        })
     })
    
 it('Bearer Token',()=>{
    
   cy.request({
      method:'GET',
      url:'https://api.github.com/user/repos',
      headers:{
        Authorization:'Bearer '+ token
      }
   }).its('status').should('eq',200)
 })
 
 it.skip('OAuth 2.0',()=>{

    cy.request({
            method:'POST',
            url:'https://github.com/login/outh/access_token',
            qs:{
               client_id:'8bdaecb13c71d7ee2b50 ',
               client_secret:'e0da2fbb4264279ec44815fe9074cb9bac7287ed ',
               code:'2498529878eae0b2e2ba'
            }
    }).then((response)=>{
      const param = response.body.split('&')
      Auth = param[0].split('=')[1]
    })
it('Get Users with Auth Token',()=>{
   cy.request({
       method:'GET',
       url:'htts://github.com/users/repos',
       headers:{
            Authorization:'Bearer '+Auth
       }
   }).then((response)=>{
      expect(response.status).eq(200)
      expect(response.body[0].id).eql('')
   })


})

 })







})