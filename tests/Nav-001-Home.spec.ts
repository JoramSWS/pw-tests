// Navigates to the SWS Main Page
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');

  // Check that there are no elements with the text "Warning"
  const warningCount = await page.locator('text=Warning').count();
  expect(warningCount).toBe(0);

});