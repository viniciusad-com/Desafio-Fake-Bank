// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

<<<<<<< HEAD
const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
=======
const { SpecReporter } = require('jasmine-spec-reporter');
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
<<<<<<< HEAD
  SELENIUM_PROMISE_MANAGER: false,
=======
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
<<<<<<< HEAD
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
=======
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
  }
};