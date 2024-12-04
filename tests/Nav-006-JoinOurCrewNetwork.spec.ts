// Navigates from Main Page to Join Our Crew Network
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'Join Our Network' }).click();
  
  // Check that there are no elements with the text "Warning"
  const warningCount = await page.locator('text=Warning').count();
  expect(warningCount).toBe(0);

});