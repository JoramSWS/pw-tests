// Navigates from PostHero to Talent search page
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/posthero/');
  await page.getByLabel('Search').click();
});