// pre-requisites are SignNewWaiver and signNewWaiverToOtherLocation
const {Builder, By, until, Key} = require("selenium-webdriver");

(async function signNewWaiverMyself() {
    var driver = new Builder().forBrowser("chrome").build();
    try {

    // navigate to application - using other location
    // await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/6");
    // await driver.get("https://qaall.icardinc.net/OnlineWaiver/home/NTAwMA%3D%3D/l/26");
    await driver.get("https://phdevserver1.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/6");

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
    await driver.findElement(By.css("input[name='firstName0']")).sendKeys("Child 906");
    await driver.findElement(By.css("input[name='lastName0']")).sendKeys("Child 906");
    await driver.findElement(By.css("input[name='childdobmm0']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobdd0']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobyyyy0']")).sendKeys("05");
    await driver.findElement(By.css("label[for='female0']")).click();

    // add more children
    await driver.findElement(By.className("add-button mat-button")).click();

    // enter child1 info
    await driver.wait(until.elementLocated(By.css("input[name='firstName1']")), 10000);
    await driver.findElement(By.css("input[name='firstName1']")).sendKeys("Child 907");
    await driver.findElement(By.css("input[name='lastName1']")).sendKeys("Child 907");
    await driver.findElement(By.css("input[name='childdobmm1']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobdd1']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobyyyy1']")).sendKeys("05");
    await driver.findElement(By.css("label[for='male1']")).click();

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

    } finally {
    // await driver.quit();
    }
  })();