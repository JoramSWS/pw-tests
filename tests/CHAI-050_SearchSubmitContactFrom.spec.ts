// navigates to crewhero.ai, executes a search, clicks on contact Secret Weapon, and then submits a contact request
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.crewhero.ai/');
  await page.getByLabel('Be as specific or').click();
  await page.getByLabel('Be as specific or').fill('I am looking for Greg Olliver');
  await page.getByLabel('Be as specific or').press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Secret Weapon', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('First').click();
  await page1.getByLabel('First').fill('CJ');
  await page1.getByLabel('Last').click();
  await page1.getByLabel('Last').fill('Ware');
  await page1.getByRole('textbox', { name: 'Phone' }).click();
  await page1.getByRole('textbox', { name: 'Phone' }).fill('5555555555');
  await page1.getByLabel('Email Address*').click();
  await page1.getByLabel('Email Address*').fill('cj@secretweapon.studio');
  await page1.getByLabel('Message*').click();
  await page1.getByLabel('Message*').fill('E2E testing');
  await page1.getByRole('button', { name: 'Send' }).click();
  await page1.locator('#gform_confirmation_message_1').getByText('Thank you for contacting').click();
  await page1.waitForTimeout(5000); // wait for 5 seconds
  await page1.goto('https://airtable.com/appUPBRiVMPyyEDRf/shrvW9Jr1GAJAHIeH/tblwz1NDtVvGjFa4f');
  await page1.getByTestId('gridCell-0:1').getByText('E2E testing').click();
});