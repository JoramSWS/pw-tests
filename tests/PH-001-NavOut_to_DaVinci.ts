import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/posthero/');
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Davinci Resolve' }).click();
  const page3 = await page3Promise;
});