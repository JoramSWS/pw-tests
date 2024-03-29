//Login with PostHero username and password, go to setup page, and logout
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(process.env.USERNAME!);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
 await page.frameLocator('#miniextensions-iframe-embed-01Omj0WJfpY5LNeAyTRQ iframe').getByRole('link', { name: 'PostHero Setup' }).click();
 await page.frameLocator('#miniextensions-iframe-embed-9cNb5KrWpIVH5FFL27Of iframe').getByText('Serial # 999999999999').click();
 await page.getByRole('link', { name: 'Logout' }).click();
});