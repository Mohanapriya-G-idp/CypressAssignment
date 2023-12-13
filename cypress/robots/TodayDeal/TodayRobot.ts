import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class TodayDealDependencies extends BaseDependencies {
   
    visitPage(){
        this.accessUrl(``);
    }
}

export class TodayDealRobotEyes extends BaseEyes{
    verifyAmazonHome(){
        cy.title().should('contains','Amazon.in')
    }
    seeItemOnTodayDealPage(){
        this.seesIdVisible("nav-xshop-container")
        cy.wait(6000)
    }
    
    verifyAddedItem(){
        this.seesDomContainText('span','Subtotal (1 item):')
    }
}

export class TodayDealRobotHands extends BaseHands{
clickOnTodayDeal(){
    this.clickOnTextElement("Today's Deals")
}
clickToSelectMinQty(){
    this.clickDomAndSelect('#selectQuantity #quantity',0,0)
}
clickOnThirdItem(){
    this.clickOnDataTestIdWithIndex("deal-card",2)

}
clickOnAddToCart(){
    this.clickOnTextElement("Add to Cart")
    cy.wait(7000)
}
goToCart(){
    this.clickOnId('nav-cart')
    cy.wait(5000)
}
}
