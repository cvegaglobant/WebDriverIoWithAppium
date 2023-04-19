export default class BaseScreen {

    async TapElement(element) {
        await element.waitForDisplayed({ timeout: 15000 });
        await element.click();
    }

    async Scroll() {
        await driver.touchAction([
            { action: 'press', x: 550, y: 1931 },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: 550, y: 330 },
            'release'
        ])
    }
}