//Login with PostHero username and password, navigate to Setup, Link out to BM Cloud Store, and logout
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/');
  await page.locator('#nav_menu-2').getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(process.env.USERNAME!);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.frameLocator('#miniextensions-iframe-embed-01Omj0WJfpY5LNeAyTRQ iframe').getByRole('link', { name: 'PostHero Setup' }).click();
  // Listen for the popup (opens in new tab) event
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    // Trigger the action that opens the popup
    await page.frameLocator("iframe[id^='miniextensions-iframe-embed-']").getByRole('link', { name: 'Cloud Store App' }).click()]);
  await popup.waitForLoadState();
  await popup.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});