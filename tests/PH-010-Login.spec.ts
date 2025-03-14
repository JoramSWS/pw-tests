//Login with PostHero username and password and logout
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/');
  await page.locator('#nav_menu-2').getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(process.env.USERNAME!);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000); // waits for 5 seconds
  await page.getByRole('link', { name: 'Logout' }).click();
});