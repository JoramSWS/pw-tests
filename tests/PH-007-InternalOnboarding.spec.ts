//navigates to PH internal onboarding page
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/posthero/onboarding/');
});