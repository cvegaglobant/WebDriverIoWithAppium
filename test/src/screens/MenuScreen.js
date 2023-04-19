import BaseScreen from "../screens/BaseScreen.js";

class MenuScreen extends BaseScreen {

    get profileOption() { return $('android=new UiSelector().className("android.widget.RelativeLayout").description("My Profile button")') }
    get propertyRulesOption() { return $('android=new UiSelector().className("android.widget.RelativeLayout").description("Property Rules button")') }
    get linkToAccOption() { return $('android=new UiSelector().className("android.widget.RelativeLayout").description("Link to Account button")') }
    get helpOption() { return $('android=new UiSelector().className("android.widget.RelativeLayout").description("Help button")') }
    get privacyAndLegalOption() { return $('android=new UiSelector().className("android.widget.RelativeLayout").description("Privacy & Legal button")') }
    get privacyScroll() { return $('android=new UiScrollable(.scrollable(true)).scrollIntoView(new UiSelector().className("android.widget.RelativeLayout").description("Privacy & Legal button"))') }
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