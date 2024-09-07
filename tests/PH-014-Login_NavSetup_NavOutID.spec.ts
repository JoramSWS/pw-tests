//Login with PostHero username and password, navigate to Setup, Link out to Cloud ID, and logout
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
  const [popup1] = await Promise.all([
    page.waitForEvent('popup'),
    await page.frameLocator('#miniextensions-iframe-embed-YO9o58FXvFZIA35GCFFq iframe').getByRole('link', { name: 'Blackmagic Cloud ID' }).click()
  ]);
  await popup1.waitForLoadState();
  await popup1.getByLabel('First Name *').click();
  await popup1.getByLabel('First Name *').fill('Joram');
  await page.getByRole('link', { name: 'Logout' }).click();
});