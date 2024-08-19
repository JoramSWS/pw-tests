//Login with PostHero username and password, go to setup page, and logout
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.locator('#nav_menu-2').getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(process.env.USERNAME!);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForSelector('text="Account"', { state: 'attached' });
  
  // test the page for warnings
  let warningCount = await page.locator('text=Warning').count();
  if (warningCount !== 0) {
    console.log('Found warning on the Account page');
  }
  expect(warningCount).toBe(0);
  

  await page.frameLocator('#miniextensions-iframe-embed-01Omj0WJfpY5LNeAyTRQ iframe').getByRole('link', { name: 'PostHero Setup' }).click();
  await page.waitForSelector('text="1. Your Cloud Store Drive"', { state: 'attached' });
  
  // test the page for warnings
  warningCount = await page.locator('text=Warning').count();
  if (warningCount !== 0) {
    console.log('Found warning on the Setup page');
  }
  expect(warningCount).toBe(0);

  await page.frameLocator('#miniextensions-iframe-embed-9cNb5KrWpIVH5FFL27Of iframe').getByText('Serial # 999999999999').click();
  await page.getByRole('link', { name: 'Logout' }).click();
});