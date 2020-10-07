const assert = require("assert");
const webdriver = require("selenium-webdriver");
const test = require("selenium-webdriver/testing");
const By = require("selenium-webdriver").By;

let browser;


require("geckodriver");


console.log("running");

test.describe("Test", function() {

    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://127.0.0.1:3000/test/test.js");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    // Test case
    test.it("Test index", function(done) {
        // Check correct title
        browser.getTitle().then(function(title) {
            assert.equal(title, "");
        });

        // Check correct heading
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Home");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("multipage/#!/"));
        });

        done();
    });



    test.it("Test go to Home", function(done) {
        // Use nav link to go to home page
        browser.findElement(By.linkText("Home")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Home");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("multipage/#!/"));
        });

        done();
    });
});
