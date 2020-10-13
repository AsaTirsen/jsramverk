const assert = require("assert");
const webdriver = require("selenium-webdriver");
const test = require("selenium-webdriver/testing");
const By = require("selenium-webdriver").By;

let browser;


require("geckodriver");

test.describe( "Test", function() {
    test.beforeEach(function(done) {
        console.log("before timeout");
        this.timeout(20000);
        browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox()).build();
        console.log("browser" + browser)
        browser.get("http://127.0.0.1:3000/");
        browser.manage().timeouts().implicitlyWait(10);
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
            assert.equal(title, "Me sidan");
        });

        // Check correct heading
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Lite om mig");
            });
        });

        // Check correct link
        browser.findElement(By.css("li")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Me-sida");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith(""));
        });

        done();
    });

    test.it("Test reports", function(done) {
        // Use nav link to go to home page
        browser.findElement(By.linkText("Redovisningar")).then(function(element) {
            element.click();
        });

        browser.findElement(By.linkText("Redovisning vecka 2")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Available Scripts");
            });
        });


        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("reports/week/2"));
        });

        done();
    });

    test.it("Test create user", function(done) {
        // Use nav link to go to home page
        browser.findElement(By.linkText("Skapa användare")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h3")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Skapa användare");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("register"));
        });

        done();
    });
});
