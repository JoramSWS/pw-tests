// Navigates from PostHero page to Premiere page
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/production-technology/posthero/');
  await page.getByRole('link', { name: 'Adobe Premiere' }).click();
});