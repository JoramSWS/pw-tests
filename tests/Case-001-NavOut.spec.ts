// Navigates to Case Studies and out to press and imdb links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow(); // Easy way to triple the default timeout
  await page.goto('https://secretweapon.tech/posthero/case-studies/');
const page1Promise = page.waitForEvent('popup'); // Faceless Lady
  await page.getByRole('link', { name: 'https://variety.com/2024/tv/' }).click();
  const page1 = await page1Promise;
const page2Promise = page.waitForEvent('popup'); // Conversations Project
  await page.getByRole('link', { name: 'https://www.imdb.com/title/tt28620422/' }).click();
  const page2 = await page2Promise;
const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://www.blackmagicdesign.' }).click();
  const page3 = await page3Promise;
const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://www.digitalmediaworld' }).click();
  const page4 = await page4Promise;
});