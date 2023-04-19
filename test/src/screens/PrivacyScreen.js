import BaseScreen from "./BaseScreen.js";

class PrivacyScreen extends BaseScreen {
    get electronicCommunicationText() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/txt_element").text("Electronic Communications Disclosure")') }
}

export default new PrivacyScreen();