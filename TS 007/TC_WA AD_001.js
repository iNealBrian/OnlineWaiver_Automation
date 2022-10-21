// SignNewWaiver as pre-requisite
const {Builder, By, untli, Key} = require("selenium-webdriver");

async function verifyAddDependent()
{
    // launch browser
    var driver = new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/5");

    // enter email address and click continue button
    await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    await driver.findElement(By.id("email-input")).sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.className("submit-button")).sendKeys(Key.RETURN);

    // click add dependents button
    await driver.wait(until.elementLocated(By.id("add-dependents-btn")), 10000);
    await driver.findElement(By.id("add-dependents-btn")).click();

    // set webdriver delay then click continue button
    await driver.sleep(20000);
    await driver.wait(until.elementLocated(By.id("dependents-continue")), 10000);
    await driver.findElement(By.id("dependents-continue")).click();
    
    // enter child0 info
    await driver.wait(until.elementLocated(By.css("input[name='firstName0']")), 10000);
    await driver.findElement(By.css("input[name='firstName0']")).sendKeys("Child 1000");
    await driver.findElement(By.css("input[name='lastName0']")).sendKeys("Child 1000");
    await driver.findElement(By.css("input[name='childdobmm0']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobdd0']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobyyyy0']")).sendKeys("2005");
    await driver.findElement(By.css("label[for='female0']")).click();

    // click continue button
    await driver.findElement(By.className("continue")).click();

    // click agree and continue
    await driver.wait(until.elementLocated(By.css("label[for='ToCChkBx-0']")), 10000);
    await driver.findElement(By.css("label[for='ToCChkBx-0']")).click();
    await driver.findElement(By.id("accept-button")).click();

    // allow notifications and continue
    await driver.findElement(By.css("label[for='textSub']")).click();
    await driver.findElement(By.css("label[for='email']")).click();
    await driver.findElement(By.id("accept-button")).click();

    // go back to home page
    // await driver.findElement(By.className("continue")).click();
    // sign another waiver
    // await driver.findElement(By.className("previous")).click();

    // close the browser
    // await driver.quit();
}
verifyAddDependent()