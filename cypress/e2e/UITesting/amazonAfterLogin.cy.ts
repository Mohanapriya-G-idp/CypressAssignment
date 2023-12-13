import cypress = require("cypress");
import { LoginEyes,LoginHands } from "../../robots/Login/loginRobot";
import { TodayDealDependencies } from "../../robots/TodayDeal/TodayRobot";
import { OrderEyes,OrderHands } from "../../robots/Orders/OrderRobot";
import { AddressEyes,AddressHands } from "../../robots/Address/AddressRobot";
import { PaymentEyes,PaymentHands } from "../../robots/Payments/PaymentRobot";


describe('Amazon Login Testing',{ testIsolation: false },()=>{
const amazonLogin=new TodayDealDependencies()
const loginPageEye =new LoginEyes()
const loginPageHands = new LoginHands()
const orderPageEyes =new OrderEyes()
const orderPageHands=new OrderHands()
const addressPageEye = new AddressEyes()
const addressPageHands =new AddressHands()
const paymentPageEye =new PaymentEyes()
const paymentPageHands =new PaymentHands()

before(()=>{
    cy.clearAllCookies()
    cy.clearAllSessionStorage()
    amazonLogin.visitPage()
    loginPageHands.clickLoginBtn()
    loginPageHands.enterLoginDetails()
    loginPageEye.verifyLoginPage()

})

it('Goto OrderPage ',()=>{
   
    orderPageHands.clickOnAccounts()
    orderPageEyes.verifyOrderPage()
    
})
it.skip("Goto Address Page",()=>{
    addressPageHands.clickOnAddress()
    addressPageHands.addNewAddress()
    addressPageEye.verifyAddressPage()
   
})
it("Goto Payment page",()=>{
    paymentPageHands.clickOnPayment()
    paymentPageEye.verifyPaymentPage()
})
})
