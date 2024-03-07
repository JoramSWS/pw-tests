// Navigates from Main Page to Join Our Crew Network
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'Join Our Crew Network' }).click();
});