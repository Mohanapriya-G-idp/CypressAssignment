import cypress = require("cypress");
import { TodayDealDependencies,TodayDealRobotEyes,TodayDealRobotHands } from "../../robots/TodayDeal/TodayRobot";
import { MobilesRoboEyes,MobilesRoboHands} from "../../robots/Mobiles/MobileRobot";

context('Amazon testing with cypress before login',()=>{
const amazonDependencies = new TodayDealDependencies()
const homeEyes=new TodayDealRobotEyes()
const homeHands = new TodayDealRobotHands()
const mobileEyes =new MobilesRoboEyes()
const mobileHands = new MobilesRoboHands()
beforeEach(()=>{
    amazonDependencies.visitPage()
})
it.skip('add todays deal item to cart',()=>{
    homeEyes.verifyAmazonHome()
   homeHands.clickOnTodayDeal()
   homeEyes.seeItemOnTodayDealPage()
   homeHands.clickOnThirdItem()
   homeHands.clickOnAddToCart()
   homeHands.goToCart()
   homeEyes.verifyAddedItem()
   })
   it('Search Mobiles and go for last',()=>{
    mobileHands.searchMobile("Mobiles")
    mobileHands.clickIcon()
    mobileEyes.scrollBottom()
    mobileHands.clickOnLast()
    mobileHands.clickSideBar()
    mobileHands.clickOnMobile()
    mobileEyes.verifyMobilesTab()
})

})