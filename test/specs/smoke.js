import HomeScreen from "../src/screens/HomeScreen.js";
import WelcomeScreen from "../src/screens/WelcomeScreen.js";
import MapScreen from "../src/screens/MapScreen.js";
import MenuScreen from "../src/screens/MenuScreen.js";

describe('Test preparados para el examen', () => {
    it('Category list Text', async () => {
        await WelcomeScreen.permitirUbicacion();
        await WelcomeScreen.saltarAyudas();
        expect(await HomeScreen.homeButton).toBeDisplayed();
        await HomeScreen.abrirMapa();
        expect(await MapScreen.mapView).toBeDisplayed();
        await MapScreen.abrirAtracciones();
        expect(await MapScreen.hotelOption).toBeDisplayed();
    });

    it('Privacy and Legal', async () => {
        await MapScreen.cerrarListado();
        await HomeScreen.abrirMenu();
        await MenuScreen.ScrollTo();
        expect(await MenuScreen.privacyAndLegalOption).toBeDisplayed();
    })
});