const {Builder, By, until, Key} = require("selenium-webdriver");

async function verifyTermsAndConditions()
{
    // launch browser
    var driver = new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/5");

    // enter email address and click continue button
    await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    await driver.findElement(By.id("email-input")).sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.className("submit-button")).sendKeys(Key.RETURN);

    // click myself option
    await driver.wait(until.elementsLocated(By.className("consent-option myself")), 10000);
    await driver.findElement(By.className("consent-option myself")).click();

    // enter parent info
    await driver.findElement(By.id("firstName")).sendKeys("Parent OO");
    await driver.findElement(By.id("lastName")).sendKeys("Parent OO");
    await driver.wait(until.elementLocated(By.id("personalId")), 10000);
    await driver.findElement(By.id("personalId")).sendKeys("54721");
    await driver.findElement(By.id("birthMonth")).sendKeys("05");
    await driver.findElement(By.id("birthDay")).sendKeys("05");
    await driver.findElement(By.id("birthYear")).sendKeys("1995");
    await driver.findElement(By.id("phoneNumber")).sendKeys("6540157894");
    await driver.findElement(By.css("label[for='female']")).click();
    await driver.findElement(By.id("address1")).sendKeys("Street Test");
    await driver.findElement(By.id("address2")).sendKeys("Apartment Test");
    await driver.findElement(By.id("address3")).sendKeys("Other");
    var selectState = await driver.findElement(By.id("stateinput"));
    await selectState.click();
    await selectState.findElement(By.css("option[value='4']")).click();
    await driver.findElement(By.id("stateOrProvince")).sendKeys("Province Test");
    await driver.findElement(By.id("city")).sendKeys("City Test");
    await driver.findElement(By.id("postalCode")).sendKeys("62487");
    var selectCountry = await driver.findElement(By.id("countryinput"));
    await selectCountry.click();
    await selectCountry.findElement(By.css("option[value='Bulgarian']")).click();

    // click continue button
    await driver.findElement(By.id("submit-button-consent")).click();

    // terms and conditions
    // await driver.wait(until.elementLocated(By.css("label[for='ToCChkBx-0']")), 10000).click();
    await driver.findElement(By.id("accept-button")).click();

    // allow notifications and continue
    // await driver.findElement(By.css("label[for='textSub']")).click();
    // await driver.findElement(By.css("label[for='email']")).click();
    // await driver.findElement(By.id("accept-button")).click();

    // go back to home page
    // await driver.findElement(By.className("continue")).click();
    // sign another waiver
    // await driver.findElement(By.className("previous")).click();

    // close the browser
    // await driver.quit();
}
verifyTermsAndConditions()