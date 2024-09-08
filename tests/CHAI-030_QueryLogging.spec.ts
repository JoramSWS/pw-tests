import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.crewhero.ai/');
  await page.getByLabel('Be as specific or').click();
  await page.getByLabel('Be as specific or').fill('I need a pa in Timbuktu');
  await page.getByLabel('Be as specific or').press('Enter');
  await page.waitForTimeout(10000); // wait for 10 seconds
  await page.goto('https://airtable.com/appUPBRiVMPyyEDRf/shrbLxeKKso5cKBUy/tblE8l3pxHrQU2tq1');
  await page.getByText('I need a pa in Timbuktu').click();
});