// Navigates from PostHero page to Avid page
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/posthero/');
  await page.getByRole('link', { name: 'Avid' }).click();
});