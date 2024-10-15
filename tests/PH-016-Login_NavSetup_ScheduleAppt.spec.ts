//Login with PostHero username and password, navigate to Setup, Schedule appt with Intercom, and logout
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(process.env.USERNAME!);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.frameLocator('#miniextensions-iframe-embed-01Omj0WJfpY5LNeAyTRQ iframe').getByRole('link', { name: 'PostHero Setup' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('link', { name: 'Schedule an Appointment' }).click();
  await page.frameLocator('iframe[name="intercom-launcher-frame"]').getByTestId('launcher-with-badge-cutout-none').click();
  await page.getByRole('link', { name: 'Logout' }).click();
});