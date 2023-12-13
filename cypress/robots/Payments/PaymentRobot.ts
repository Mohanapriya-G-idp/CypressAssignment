import { BaseEyes,BaseHands } from "../BaseRobot";

export class PaymentEyes extends BaseEyes{
    verifyPaymentPage(){
        this.seesDomContainText('span','Your Payment Options')
    }
}
export class PaymentHands extends BaseHands{
    clickOnPayment(){
        this.clickOnId("nav-link-accountList-nav-line-1");
        this.clickOnTextElement("Your Account");
        cy.wait(6000);
        this.clickOnTextElement("Payment options");
    }

}
