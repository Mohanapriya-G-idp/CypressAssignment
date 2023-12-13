import { data } from "cypress/types/jquery";
import { BaseEyes, BaseHands } from "../BaseRobot";

export class AddressEyes extends BaseEyes {
  verifyAddressPage() {
    cy.wait(5000)
    this.seesDomContainText("h4", "Address saved");
  }
}
export class AddressHands extends BaseHands {
  clickOnAddress() {
    this.clickOnId("nav-link-accountList-nav-line-1");
    this.clickOnTextElement("Your Account")
    cy.wait(6000);
    this.clickOnTextElement("Your Addresses");
  }
  addNewAddress() {
    this.clickOnTextElement("Add address");
    cy.fixture('newAddress.json').then((data)=>{
      this.typeTextonId("address-ui-widgets-enterAddressFullName", data.name);
      this.typeTextonId("address-ui-widgets-enterAddressPhoneNumber",data.phone);
      this.typeTextonDom("name","address-ui-widgets-enterAddressPostalCode",data.postal);
      this.typeTextonDom( "autocomplete","address-ui-widgets-enterAddressLine1",data.address1);
      this.typeTextonId('address-ui-widgets-enterAddressLine2',data.address2);
 }) 
    cy.wait(6000)
    this.clickOnId('address-ui-widgets-form-submit-button')
  }
}
