export default class BaseScreen {

    async TapElement(element) {
        await element.waitForDisplayed({ timeout: 15000 });
        await element.click();
    }

    async ScrollTo() {
        const { height } = driver.getWindowSize();
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endPointPercentage = 10;

        const anchor = height * anchorPercentage / 100;
        const startPoint = height * startPointPercentage / 100;
        const endPoint = height * endPointPercentage / 100;

        await driver.touchPerform([{
            action: 'press',
            options: {
                x: anchor,
                y: startPoint
            }
        }, {
            action: 'wait',
            options: {
                ms: 1000
            }
        }, {
            action: 'moveTo',
            options: {
                x: anchor,
                y: endPoint
            }
        }, {
            action: 'release',
            options: {}
        }

        ]);
    }
}