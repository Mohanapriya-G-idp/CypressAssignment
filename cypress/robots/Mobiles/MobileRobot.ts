import { BaseEyes,BaseHands } from "../BaseRobot";

export class MobilesRoboEyes extends BaseEyes{
    scrollBottom(){
        this.scrollToBottom()
       
    }
    verifyMobilesTab(){
        this.seesIdVisible("hmenu-content")
        
    }
}
export class MobilesRoboHands extends BaseHands{
// searchMobile(){
//     this.typeTextonId('twotabsearchtextbox','Mobiles')
// }
searchMobile(data:any){
    this.typeTextonIds('twotabsearchtextbox',data)
}
clickOnLast(){
    this.newTabOpening('[data-component-type="s-search-result"]',-1,'a',0)
    cy.wait(7000)
}
clickSideBar(){
    this.clickOnDomElementWithIndex('.nav-left',2)
    
}
clickOnMobile(){
    this.clickOnDomElementWithIndex('.hmenu-item',12)
    cy.wait(7000)
}
clickIcon(){
    this.clickOnDomElementWithIndex('input',4)
cy.wait(7000)
}


}