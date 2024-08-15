// Navigate from Main Page to Team and About pages
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'Team' }).click();
  // await page.getByRole('link', { name: 'About' }).click();  (About page not live - CJ 8.13.24)
});