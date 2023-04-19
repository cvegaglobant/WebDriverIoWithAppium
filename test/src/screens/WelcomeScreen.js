import BaseScreen from "./BaseScreen.js";

class WelcomeScreen extends BaseScreen {
    get getStartedButton() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/permission_primary_btn")') }
    get shareLocation() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/permission_primary_btn").text("Share Location")') }
    get okButton() { return $('android=new UiSelector().resourceId("android:id/button1").text("OK")') }
    get whileUsingApp() { return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")') }
    get dismissButton() { return $('android=new UiSelector().resourceId("dismiss-icon")') }

    async permitirUbicacion() {
        await this.TapElement(await this.getStartedButton);
        await this.TapElement(await this.shareLocation);
        await this.TapElement(await this.okButton);
        await this.TapElement(await this.whileUsingApp);
    }

    async saltarAyudas() {
        await this.TapElement(await this.dismissButton);
    }
}

export default new WelcomeScreen();