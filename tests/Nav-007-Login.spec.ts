// Navigates from Main Page to Login, via both header and mobile links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/');
  await page.locator('#nav_menu-2').getByRole('link', { name: 'Login' }).click();
  await page.click('span.logo.avia-standard-logo a'); // returns to Main Page via header logo link
  await page.locator('li.mobile-only.menu-item-9152.av-active-burger-items a').click;
});