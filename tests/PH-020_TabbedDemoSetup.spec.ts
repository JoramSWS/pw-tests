// Tabbed /demo-setup-2/ page testing
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://secretweapon.tech/posthero/demo-setup-2/?a=recmSXaS4SK7L7Clw');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Blackmagic Cloud Account' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Log In' }).click();
  await page.getByLabel('2. Provide the email address').click();
  await page.getByLabel('2. Provide the email address').fill('demo@demo.com');
  await page.getByRole('button', { name: 'Done. On to the next step!' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.frameLocator('internal:role=tabpanel[name="DaVinci Resolve"i] >> iframe').getByRole('link', { name: 'DaVinci Resolve 19:' }).click();
  const page3 = await page3Promise;
  await page3.getByRole('link', { name: 'Davinci Resolve Free Download' }).click();
  await page3.getByRole('link', { name: 'Mac OS X' }).first().click();
  await page3.locator('#close').getByRole('link').click();
  await page.getByRole('link', { name: 'Done. On to the next step!' }).click(); 
});