const { chromium, firefox, webkit } = require('playwright');

async function testTitle(browserType) {
    // Launch a new browser instance
    const browser = await browserType.launch();
  
    // Create a new page (tab) in the browser
    const page = await browser.newPage();
  
    // Navigate to the target URL
    await page.goto('https://njit-wis.github.io/project-2-is219-wwc/');
  
    // Check if the title is correct
    const title = await page.title();
    if (title !== 'MyWebClass.org') {
      console.error(`Failed: expected 'MyWebClass.org', but got '${title}'`);
    } else {
      console.log('Passed');
    }
  
    // Close the browser
    await browser.close();
  }  

  (async () => {
    console.log('Testing on Chromium...');
    await testTitle(chromium);
  
    console.log('Testing on Firefox...');
    await testTitle(firefox);
  
    console.log('Testing on WebKit...');
    await testTitle(webkit);
  })();