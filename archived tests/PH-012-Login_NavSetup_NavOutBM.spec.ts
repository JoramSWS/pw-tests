//Login with PostHero username and password, navigate to Setup, Link out to BM Cloud Store, and logout
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('demo@demo.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('demo_1234!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.frameLocator('#miniextensions-iframe-embed-01Omj0WJfpY5LNeAyTRQ iframe').getByRole('link', { name: 'PostHero Setup' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.frameLocator('#miniextensions-iframe-embed-YO9o58FXvFZIA35GCFFq iframe').getByRole('link', { name: 'Cloud Store App' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});