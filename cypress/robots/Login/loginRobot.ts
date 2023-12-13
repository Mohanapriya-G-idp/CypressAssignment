import { BaseEyes,BaseHands,BaseDependencies } from "../BaseRobot";

export class LoginEyes extends BaseEyes{
    verifyLoginPage(){
        this.seesDomContainText('span','Hello, priya')
        cy.wait(3000)
    }
}
export class LoginHands extends BaseHands{
clickLoginBtn(){
    cy.wait(5000)
    cy.get('#nav-link-accountList-nav-line-1').trigger("mouseover").click()
    
}
enterLoginDetails(){
    cy.fixture('/Credentials.json').then((data)=>{
      this.typeTextonId('ap_email',data.email)
      this.clickOnId('continue')
      this.typeTextonId('ap_password',data.password)
      cy.intercept("POST","https://www.amazon.in/ap/signin").as('login')
      this.clickOnId('signInSubmit')
     
      cy.wait("@login").then((res)=>{
        res.response?.statusCode==(200)
      })
    })
}

}