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

    // add more children
    await driver.findElement(By.className("add-button mat-button")).click();

    // enter child1 info
    await driver.wait(until.elementLocated(By.css("input[name='firstName1']")), 10000);
    await driver.findElement(By.css("input[name='firstName1']")).sendKeys("Child 1001");
    await driver.findElement(By.css("input[name='lastName1']")).sendKeys("Child 1001");
    await driver.findElement(By.css("input[name='childdobmm1']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobdd1']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobyyyy1']")).sendKeys("05");
    await driver.findElement(By.css("label[for='male1']")).click();

    // add more children
    await driver.findElement(By.className("add-button mat-button")).click();

    // enter child2 info
    await driver.wait(until.elementLocated(By.css("input[name='firstName2']")), 10000);
    await driver.findElement(By.css("input[name='firstName2']")).sendKeys("Child 1002");
    await driver.findElement(By.css("input[name='lastName2']")).sendKeys("Child 1002");
    await driver.findElement(By.css("input[name='childdobmm2']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobdd2']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobyyyy2']")).sendKeys("05");
    await driver.findElement(By.css("label[for='male2']")).click();

    // add more children
    await driver.findElement(By.className("add-button mat-button")).click();

    // enter child3 info
    await driver.wait(until.elementLocated(By.css("input[name='firstName3']")), 10000);
    await driver.findElement(By.css("input[name='firstName3']")).sendKeys("Child 1003");
    await driver.findElement(By.css("input[name='lastName3']")).sendKeys("Child 1003");
    await driver.findElement(By.css("input[name='childdobmm3']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobdd3']")).sendKeys("05");
    await driver.findElement(By.css("input[name='childdobyyyy3']")).sendKeys("05");
    await driver.findElement(By.css("label[for='male3']")).click();

    // add more children
    await driver.findElement(By.className("add-button mat-button")).click();

    // close the browser
    // await driver.quit();
}
verifyAddDependent()