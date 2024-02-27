import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'Team' }).click();
  await page.getByRole('link', { name: 'About' }).click();
});