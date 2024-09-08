import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.crewhero.ai/');
  await page.getByLabel('Be as specific or').click();
  await page.getByLabel('Be as specific or').fill('I am looking for George Willikers');
  await page.getByLabel('Be as specific or').press('Enter');
  await page.locator('iframe').contentFrame().getByTitle('5').click();
  await page.locator('iframe').contentFrame().locator('textarea#input_50_3').click();
  await page.locator('iframe').contentFrame().locator('textarea#input_50_3').fill('feedback testing');
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(10000); // wait for 10 seconds
  await page.goto('https://airtable.com/appUPBRiVMPyyEDRf/shrnApe0O0Tkhlaix/tblE8l3pxHrQU2tq1');
  await page.getByText('I am looking for George');
});