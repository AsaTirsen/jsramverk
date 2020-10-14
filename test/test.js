const assert = require("assert");
const webdriver = require("selenium-webdriver");
const test = require("selenium-webdriver/testing");
const By = require("selenium-webdriver").By;
const until = webdriver.until;

let browser;


require("geckodriver");

test.describe("Test", function () {
    test.beforeEach(function () {
        this.timeout(20000);
        browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox()).build();
        browser.get("http://127.0.0.1:3000/");
    });

    test.afterEach(function () {
        browser.quit();
    });


    // Test case
    test.it("Test index", async function () {
        // Check correct title
        let title = await browser.getTitle();
        assert(title === "Me sidan");

        await browser.wait(until.elementTextIs(await browser.findElement(By.css("h1")), "Lite om mig"), 5000);

        // Check correct link
        let li = await browser.findElement(By.css("li"));
        let text = await li.getText();
        assert.strictEqual(text, "Me-sida");

        // Check correct URL ending
        let url = await browser.getCurrentUrl();
        assert.ok(url.endsWith(""));
    });

    test.it("Test reports", async function () {
        // Use nav link to go to home page
        let element = await browser.findElement(By.linkText("Redovisningar"))
        element.click();

        // Check correct URL ending
        let url1 = await browser.getCurrentUrl();
        assert.ok(url1.endsWith("reports"));

        await browser.wait(until.elementLocated(By.css('.main li')));
        let li = await browser.findElement(By.css('.main li'));
        await browser.wait(until.elementTextIs(li, "Redovisning vecka 1"));

        let element2 = await browser.findElement(By.linkText("Redovisning vecka 1"))
        element2.click();

        let url = await browser.getCurrentUrl();
        assert.ok(url.endsWith("reports/week/1"));


        // Check correct heading
        await browser.wait(until.elementTextIs(await browser.findElement(By.css("h2")), "Available Scripts"));
    });

    test.it("Test create user", async function () {
        // Use nav link to go to home page
        let link = browser.findElement(By.linkText("Skapa användare"))
        link.click();

        //Check correct heading
        await browser.wait(until.elementTextIs(await browser.findElement(By.css("h3")), "Skapa användare"), 5000);


        // Check correct URL ending
        let url = await browser.getCurrentUrl();
        assert.ok(url.endsWith("register"));
    });
});
