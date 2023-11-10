import puppeteer from 'puppeteer';
jest.setTimeout(20000);

test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');
    
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
    browser.close();
})

test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');
    await page.click('.event .show-hide-details');

    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
    browser.close();
})