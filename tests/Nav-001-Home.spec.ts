import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the URL and wait for the page to load
  await page.goto('https://secretweapon.studio/', { waitUntil: 'domcontentloaded' });

  // Explicitly wait for a known element to ensure the page has loaded
  await page.waitForSelector('body', { state: 'attached' });

  // Check for the absence of elements with the text "Warning"
  const warningLocator = page.locator('text=Warning');
  const warningCount = await warningLocator.count();

  // Assert there are no warnings on the page
  expect(warningCount).toBe(0);
});