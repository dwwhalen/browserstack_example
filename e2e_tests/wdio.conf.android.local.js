exports.config = {
    runner: 'local',
    port: 4723, 
    specs: [
        './test/specs/login-test.js'
    ],
    maxInstances: 1,
    capabilities: [{
        "platformName": "Android",
        "appium:automationName": "flutter",
        "appium:deviceName": "My Android Device",
        'appium:fullReset': true,
        'appium:noReset': false,
        "appium:app": process.env.DEMO_APK_PATH
    }],
    logLevel: 'trace',
    baseUrl: 'http://localhost',
    waitforTimeout: 30000,
    connectionRetryTimeout: 240000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        waitforTimeout: 30000,
        retries: 2
    },
}