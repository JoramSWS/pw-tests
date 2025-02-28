// Navigates to Case Studies and out to press and imdb links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow(); // Easy way to triple the default timeout
  await page.goto('https://secretweapon.tech/posthero/case-studies/');
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://www.digitalmediaworld' }).click();
  const page4 = await page4Promise;
  const page5Promise = page.waitForEvent('popup'); // Studio 666
  await page.getByRole('link', { name: 'https://www.imdb.com/title/tt15374070/' }).click();
  const page5 = await page5Promise;
});