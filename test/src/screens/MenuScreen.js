import BaseScreen from "../screens/BaseScreen.js";

class MenuScreen extends BaseScreen {

    get privacyAndLegalOption() { return $('android=new UiSelector().className("android.widget.RelativeLayout").description("Privacy & Legal button")') }
    get banner() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/avatarImage")') }
    get recycler() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/moreScreenRecyclerView")') }

    async tocarBanner() {
        await this.TapElement(await this.banner);
    }

    async abrirPrivacyOption() {
        await this.TapElement(await this.privacyAndLegalOption);
    }

}

export default new MenuScreen();