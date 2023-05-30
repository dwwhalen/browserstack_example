const find = import('appium-flutter-finder');

describe('MyQHealth 2.0 Flutter App', function () {

    // this.retries(2);  //max number of retries it test fails (https://webdriver.io/docs/retry/

    before(async function () {
        console.log("in before...");
    });


    beforeEach(async function () {
        console.log("in beforeEach...");

        // this code was an attempt to restart the app with each test.  It works running locally, but there is 
        //an open issue with browserstack related to it, so leaving it here in case we need it.
        console.log("in beforeEach...");
        console.log("TERMINATE");
        // await driver.terminateApp("io.qhapps.myqhealth_mobile_flutter_poc");
        console.log("PAUSING AFTER TERMINATE");
        await driver.pause(5000);
        console.log("ACTIVATE");
        // await driver.activateApp("io.qhapps.myqhealth_mobile_flutter_poc");
        console.log("PAUSING AFTER ACTIVATE");
        await driver.pause(5000);
    });

    afterEach(async function () {
        console.log("in afterEach...");
    });

    it.only('my demo test 1', async () => {

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