import cypress = require("cypress");
import "./commands.js"
import { LoginEyes,LoginHands } from "../../robots/Login/loginRobot";
import { TodayDealDependencies } from "../../robots/TodayDeal/TodayRobot";
import { OrderEyes,OrderHands } from "../../robots/Orders/OrderRobot";
import { AddressEyes,AddressHands } from "../../robots/Address/AddressRobot";
import { PaymentEyes,PaymentHands } from "../../robots/Payments/PaymentRobot";


describe('Amazon Login Testing',()=>{
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
cy.login("mohana","priya");
cy.loginoff()
})

it('Goto OrderPage ',()=>{
    cy.visit('/')
    loginPageEye.verifyLoginPage()
    orderPageHands.clickOnAccounts()
    orderPageEyes.verifyOrderPage()
    
})
it("Goto Address Page",()=>{
    cy.visit('/')
    addressPageHands.clickOnAddress()
    addressPageHands.addNewAddress()
    addressPageEye.verifyAddressPage()
   
})
it("Goto Payment page",()=>{
    cy.visit('/')
    paymentPageHands.clickOnPayment()
    paymentPageEye.verifyPaymentPage()
})
})
