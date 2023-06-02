exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  hostname: 'hub.browserstack.com',

  services: [
    [
      'browserstack',
      {
        buildIdentifier: "some build identifier",
        // browserstackLocal: false,
        // opts: { forcelocal: false, localIdentifier: "digital-myqhealth-mobile-native" },
        // app: "../build/app/outputs/flutter-apk/app-debug.apk"
        app: "dennis_example"
      }
    ]
  ],

  capabilities: [{
    // "appium:automationName": 'flutter',
    'appium:fullReset': true,
    'appium:noReset': false,
    'bstack:options': {
      deviceName: 'Samsung Galaxy S23 Ultra',
      osVersion: "13.0",
    }
  },
  // {
  //   "appium:automationName": 'flutter',
  //   'appium:fullReset': true,
  //   'appium:noReset': false,
  //   'bstack:options': {
  //     deviceName: 'Google Pixel 6 Pro',
  //     osVersion: "12.0"
  //   }
  // }
  ],

  commonCapabilities: {
    'bstack:options': {
      projectName: "My Dummy project",
      buildName: 'My Dummy project build',
      sessionName: 'My Dummy project session',
      debug: true,
      networkLogs: true,
      // source: 'webdriverio:appium-sample-sdk:v1.0',
      platformName: "android",
      appiumVersion: "2.0.0",
      "automationVersion": "latest"
    }
  },

  maxInstances: 10,

  updateJob: false,
  specs: [
    './test/specs/login-test.js',
    // './tests/registration-test.js'
  ],
  exclude: [],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 30000,
  connectionRetryTimeout: 240000,
  connectionRetryCount: 1,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
    waitforTimeout: 30000,
    retries: 0
  },
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (let key in exports.config.commonCapabilities)
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key] };
});
