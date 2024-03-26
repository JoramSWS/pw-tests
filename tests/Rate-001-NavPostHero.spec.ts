// access PH Rates, navigate to PostHero main page
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/posthero/resolve-collaboration-rates/');
  await page.getByRole('link', { name: 'learn more', exact: true }).click();
});