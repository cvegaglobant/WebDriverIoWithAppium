import BaseScreen from "./BaseScreen.js";

class FloatingScreen extends BaseScreen {
    get checkDinning() { return $('android=new UiSelector().className("android.widget.FrameLayout").description("Check Dining Availability, 1 of 7, button")') }
}

export default new FloatingScreen();