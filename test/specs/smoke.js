import HomeScreen from "../src/screens/HomeScreen.js";
import WelcomeScreen from "../src/screens/WelcomeScreen.js";
import MapScreen from "../src/screens/MapScreen.js";
import MenuScreen from "../src/screens/MenuScreen.js";
import PrivacyScreen from "../src/screens/PrivacyScreen.js";
import FloatingScreen from "../src/screens/FloatingScreen.js";

describe('Test preparados para el examen', () => {
    it('Category list Text', async () => {
        await WelcomeScreen.permitirUbicacion();
        await WelcomeScreen.saltarAyudas();
        expect(await HomeScreen.homeButton).toBeDisplayed();
        await HomeScreen.abrirMapa();
        expect(await MapScreen.mapView).toBeDisplayed();
        await MapScreen.abrirAtracciones();
        expect(await MapScreen.hotelOption).toBeDisplayed();
        await MapScreen.cerrarListado();
    });

    it('Privacy and Legal', async () => {
        await HomeScreen.abrirMenu();
        await MenuScreen.tocarBanner();
        expect(await MenuScreen.profileOption).toBeDisplayed();
        expect(await MenuScreen.propertyRulesOption).toBeDisplayed();
        expect(await MenuScreen.linkToAccOption).toBeDisplayed();
        expect(await MenuScreen.helpOption).toBeDisplayed();
        expect(await MenuScreen.privacyScroll).toBeDisplayed();
        await MenuScreen.abrirPrivacyOption();
        expect(await PrivacyScreen.privacyPolicy).toBeDisplayed();
        expect(await PrivacyScreen.termsOfUSe).toBeDisplayed();
        expect(await PrivacyScreen.supplementalTerms).toBeDisplayed();
        expect(await PrivacyScreen.legalNotices).toBeDisplayed();
        expect(await PrivacyScreen.propertyRules).toBeDisplayed();
        expect(await PrivacyScreen.electronicCommunicationText).toBeDisplayed();
    })

    it('Add plans option', async () => {
        await PrivacyScreen.abrirPlanButton();
        expect(await FloatingScreen.checkDinning).toBeEnabled();
        expect(await FloatingScreen.checkDinning).toBeClickable();
    })
});