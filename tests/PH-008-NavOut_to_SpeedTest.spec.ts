// navigates from PH onboarding form out to speedtest.net
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/posthero/onboarding/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://speedtest.net' }).click();
  const page1 = await page1Promise;
});