describe('Use Authorization',()=>{
    let authToken: any
    let orderid: any

before('Generate Token',()=>{
   const date =new Date(2020,3,10).getTime()
   cy.clock(date)
 cy.request({
    method:'POST',
    url:'https://simple-books-api.glitch.me/api-clients/',
    body: {
            clientName:'QWERT',
            clientEmail: Math.random().toString(5).substring(2)+'@msn.com'
         }
 }).then((response)=>{
    authToken = response.body.accessToken
 })
})
it('Create an order using Token',()=>{
    cy.request({
       method:'POST',
       url:'https://simple-books-api.glitch.me/orders',
       headers :{
        'Authorization':'bearer ' + authToken
    },
       body:{
           
             bookId: 1,
             customerName: 'priya'
            }
    }).then((response)=>{
        expect(response.status).equal(201)
        orderid =response.body.orderId
    })
   })






})