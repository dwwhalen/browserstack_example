const find = require('appium-flutter-finder');
const assert = require('assert');

const counterTextFinder = find.byValueKey('counter');
const buttonFinder = find.byValueKey('increment');


describe('Demo Test', function () {

    // this.retries(2);  //max number of retries it test fails (https://webdriver.io/docs/retry/

    before(async function () {
        console.log("in before...");
    });


    beforeEach(async function () {
        console.log("in beforeEach...");

        // this code was an attempt to restart the app with each test.  It works running locally, but there is 
        //an open issue with browserstack related to it, so leaving it here in case we need it.
        console.log("TERMINATING");
        await driver.terminateApp("com.example.browserstack_example");
        console.log("PAUSING AFTER TERMINATING");
        await driver.pause(2000);
        console.log("ACTIVATING");
        await driver.activateApp("com.example.browserstack_example");
        console.log("PAUSING AFTER ACTIVATING");
        await driver.pause(2000);
    });

    afterEach(async function () {
        console.log("in afterEach...");
    });

    it('my demo test 1', async () => {

        console.log("STARTING my demo test 1");

        await driver.pause(2000);

        console.log("test1 CHECKING HEALTH");
        // await driver.switchContext("FLUTTER");
        await driver.execute('flutter:checkHealth')
        assert.strictEqual(await driver.getElementText(counterTextFinder), '0');
        await driver.elementClick(buttonFinder);
        await driver.elementClick(buttonFinder);
        await driver.elementClick(buttonFinder);
        await driver.elementClick(buttonFinder);
        await driver.elementClick(buttonFinder);
        assert.strictEqual(await driver.getElementText(counterTextFinder), '5');
        await driver.pause(2000);

        console.log("ENDING my demo test 1");

    });

    it('my demo test 2', async () => {

        console.log("STARTING my demo test 2");

        assert.strictEqual(await driver.getElementText(counterTextFinder), '0');
        await driver.elementClick(buttonFinder);
        await driver.elementClick(buttonFinder);
        assert.strictEqual(await driver.getElementText(counterTextFinder), '2');
        await driver.pause(2000);

        console.log("ENDING my demo test 2");

    });
});