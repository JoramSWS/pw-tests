// Navigates from PostHero to Conversations Project page
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/posthero/');
  await page.getByRole('link', { name: 'Learn More >' }).click();
});