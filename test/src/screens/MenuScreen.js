import BaseScreen from "../screens/BaseScreen.js";

class MenuScreen extends BaseScreen {

    get privacyAndLegalOption() { return $('android=new UiSelector().className("android.widget.RelativeLayout").description("Privacy & Legal button")') }
    get banner() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/avatarImage")') }

    async tocarBanner() {
        await this.TapElement(await this.banner);
    }
}

export default new MenuScreen();