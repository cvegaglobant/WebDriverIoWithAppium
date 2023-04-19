import BaseScreen from "./BaseScreen.js";

class MapScreen extends BaseScreen {
    get mapView() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/map_view_fragment")') }
    get attractionsDropDown() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/categoryTitleLayout").description("Attractions, Category, Collapsed, 1of11, button")') }
    get hotelOption() { return $('android=new UiSelector().className("android.widget.LinearLayout").description("Hotels, Category, 10of11, button")') }
    get closeDropDown() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/closeButton")') }

    async abrirAtracciones() {
        await this.TapElement(await this.attractionsDropDown);
    }

    async cerrarListado() {
        await this.TapElement(await this.closeDropDown);
    }
}

export default new MapScreen();