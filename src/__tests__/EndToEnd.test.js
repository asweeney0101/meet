import puppeteer from 'puppeteer';
jest.setTimeout(20000);

describe('show/hide event details', () => {
    let browser;
    let page;
    let eventDetails
    beforeAll(async () => {
      browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 250, 
        // timeout: 0 
        });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
      eventDetails = await page.$('.event .details');
    });
  
    afterAll(() => {
      browser.close();
    });
  
test('An event element is collapsed by default', async () => {     
    expect(eventDetails).toBeNull();
})

test('User can expand an event to see its details', async () => {
    await page.click('.event .show-hide-details');
    expect(eventDetails).toBeDefined();
})

test('User can collapse an event to hide details', async () => {
    await page.click('.event .show-hide-details');
    expect(eventDetails).toBeNull();
  });

})