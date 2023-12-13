import { BaseEyes, BaseHands } from "../BaseRobot";

export class OrderEyes extends BaseEyes {
  verifyOrderPage() {
    this.seesDomContainText("span", "2022");
    cy.wait(3000)
  }
}
export class OrderHands extends BaseHands {
  clickOnAccounts() {
   this.clickOnId('nav-link-accountList-nav-line-1')
    this.clickOnTextElement("Your Orders");
    cy.wait(3000)
    // this.clickOnDomElement("select[name='timeFilter']")
    // cy.wait(6000)
    // this.clickOnId('time-filter_3');
    cy.get("select#time-filter",{timeout:2000}).select('2022',{force:true})
    .should('have.value','year-2022')
  }
}
