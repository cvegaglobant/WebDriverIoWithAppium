import BaseScreen from "./BaseScreen.js";

class PrivacyScreen extends BaseScreen {
    get privacyPolicy() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/txt_element").text("Privacy Policy")') }
    get termsOfUSe() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/txt_element").text("Terms of Use")') }
    get supplementalTerms() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/txt_element").text("Supplemental Terms and Conditions")') }
    get legalNotices() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/txt_element").text("Legal Notices")') }
    get propertyRules() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/txt_element").text("Property Rules")') }
    get electronicCommunicationText() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/txt_element").text("Electronic Communications Disclosure")') }
}

export default new PrivacyScreen();