const find = import('appium-flutter-finder');

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
        await driver.pause(5000);
        console.log("ACTIVATING");
        await driver.activateApp("com.example.browserstack_example");
        console.log("PAUSING AFTER ACTIVATING");
        await driver.pause(5000);
    });

    afterEach(async function () {
        console.log("in afterEach...");
    });

    it('my demo test 1', async () => {

        console.log("STARTING my demo test 1");

        await driver.pause(5000);

        console.log("ENDING my demo test 1");

    });

    it('my demo test 2', async () => {

        console.log("STARTING my demo test 2");

        await driver.pause(5000);

        console.log("ENDING my demo test 2");

    });
});