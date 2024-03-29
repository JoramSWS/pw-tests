//Login with PostHero username and password, navigate to Setup, Link out to Davinci Get Started, and logout
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
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '➜ Get Started' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Overview' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});