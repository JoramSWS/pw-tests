// fangcreative.agency test
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fangcreative.agency/');

  // Check that there are no elements with the text "Warning"
  const warningCount = await page.locator('text=Warning').count();
  expect(warningCount).toBe(0);

});