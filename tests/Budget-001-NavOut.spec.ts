// Navigates to Case Studies and out to press and imdb links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/');
  await page.locator('#posthero').getByRole('link', { name: 'learn more' }).click();
  await page.getByRole('link', { name: 'View budget comparisons' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('section').filter({ hasText: 'Avid Remote Edit $98,880 –' }).getByRole('link').click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.locator('section').filter({ hasText: 'PostHero Resolve Remote Edit $30,305 – view budget –' }).getByRole('link').click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.locator('section').filter({ hasText: 'Avid Remote Edit $401,680 –' }).getByRole('link').click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent('popup');
  await page.locator('section').filter({ hasText: 'PostHero Resolve Remote Edit $133,130 – view budget –' }).getByRole('link').click();
  const page4 = await page4Promise;
  const page5Promise = page.waitForEvent('popup');
  await page.locator('section').filter({ hasText: 'Avid Remote Edit $1,545,684' }).getByRole('link').click();
  const page5 = await page5Promise;
  const page6Promise = page.waitForEvent('popup');
  await page.locator('section').filter({ hasText: 'PostHero Resolve Remote Edit $1,365,685 – view budget –' }).getByRole('link').click();
  const page6 = await page6Promise;
});