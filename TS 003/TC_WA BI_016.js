const {Builder, By, until, Key} = require("selenium-webdriver");

async function signNewWaiverMyselfAndChild()
{
    // launch the browser
    var driver = new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/5");

    // enter email address and click continue button
    await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    await driver.findElement(By.id("email-input")).sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.className("submit-button")).sendKeys(Key.RETURN);

    // click children option
    await driver.wait(until.elementsLocated(By.className("consent-option myself-and-children")), 10000);
    await driver.findElement(By.className("consent-option myself-and-children")).click();

    // enter parent info
    await driver.findElement(By.id("firstName")).sendKeys("Parent OO");
    await driver.findElement(By.id("lastName")).sendKeys("Parent OO");
    await driver.findElement(By.id("personalId")).sendKeys("5421");
    await driver.findElement(By.id("birthMonth")).sendKeys("05");
    await driver.findElement(By.id("birthDay")).sendKeys("05");
    await driver.findElement(By.id("birthYear")).sendKeys("1995");
    await driver.findElement(By.id("phoneNumber")).sendKeys("6540157894");
    await driver.findElement(By.css("label[for='male']")).click();
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

    // enter child1 info
    await driver.findElement(By.css("input[name='firstName0']")).sendKeys("Child 904");
    await driver.findElement(By.css("input[name='lastName0']")).sendKeys("Child 904");
    await driver.findElement(By.css("input[name='childdobmm0']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobdd0']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobyyyy0']")).sendKeys("2015");
    await driver.findElement(By.css("label[for='male-child0']")).click();
    await driver.findElement(By.css("label[for='male-child0']")).click();

    // add more child
    await driver.findElement(By.className("add-button")).click();

    // enter child2 info
    await driver.findElement(By.css("input[name='firstName1']")).sendKeys("Child 905");
    await driver.findElement(By.css("input[name='lastName1']")).sendKeys("Child 905");
    await driver.findElement(By.css("input[name='childdobmm1']")).sendKeys("06");
    await driver.findElement(By.css("input[name='childdobdd1']")).sendKeys("06");
    await driver.findElement(By.css("input[name='childdobyyyy1']")).sendKeys("2016");
    await driver.findElement(By.css("label[for='male-child1']")).click();
    await driver.findElement(By.css("label[for='male-child1']")).click();

    // add more child
    await driver.findElement(By.className("add-button")).click();

    // enter child3 info
    await driver.findElement(By.css("input[name='firstName2']")).sendKeys("Child 906");
    await driver.findElement(By.css("input[name='lastName2']")).sendKeys("Child 906");
    await driver.findElement(By.css("input[name='childdobmm2']")).sendKeys("06");
    await driver.findElement(By.css("input[name='childdobdd2']")).sendKeys("06");
    await driver.findElement(By.css("input[name='childdobyyyy2']")).sendKeys("2016");
    await driver.findElement(By.css("label[for='male-child2']")).click();
    await driver.findElement(By.css("label[for='male-child2']")).click();

    // add more child
    await driver.findElement(By.className("add-button")).click();

    // enter child4 info
    await driver.findElement(By.css("input[name='firstName3']")).sendKeys("Child 907");
    await driver.findElement(By.css("input[name='lastName3']")).sendKeys("Child 907");
    await driver.findElement(By.css("input[name='childdobmm3']")).sendKeys("06");
    await driver.findElement(By.css("input[name='childdobdd3']")).sendKeys("06");
    await driver.findElement(By.css("input[name='childdobyyyy3']")).sendKeys("2016");
    await driver.findElement(By.css("label[for='male-child3']")).click();
    await driver.findElement(By.css("label[for='male-child3']")).click();

    // click continue button
    await driver.findElement(By.id("submit-button-consent")).click();

    // terms and conditions
    // await driver.wait(until.elementLocated(By.css("label[for='ToCChkBx-0']")), 10000).click();
    // await driver.findElement(By.id("accept-button")).click();

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
signNewWaiverMyselfAndChild()