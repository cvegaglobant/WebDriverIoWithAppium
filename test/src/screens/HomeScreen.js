import BaseScreen from "./BaseScreen.js";

class HomeScreen extends BaseScreen {
    get homeButton() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/tab_icon").description("Home, Tab, 1of5")') }
    get mapButton() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/tab_icon").description("Map, Tab, 2of5")') }
    get menuButton() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/tab_icon").description("More Options, Tab, 5of5")') }


    async abrirMapa() {
        await this.TapElement(await this.mapButton);
    }

    async abrirMenu() {
        await this.TapElement(await this.menuButton);
    }
}

export default new HomeScreen();