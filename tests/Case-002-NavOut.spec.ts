// Navigates to Case Studies and out to press and imdb links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow(); // Easy way to triple the default timeout
  await page.goto('https://secretweapon.tech/posthero/case-studies/');
const page5Promise = page.waitForEvent('popup'); // Studio 666
  await page.getByRole('link', { name: 'https://www.imdb.com/title/tt15374070/' }).click();
  const page5 = await page5Promise;
const page6Promise = page.waitForEvent('popup');  // Rise
  await page.getByRole('link', { name: 'https://www.imdb.com/title/tt11242162/' }).click();
  const page6 = await page6Promise;
await page6.goto('https://www.imdb.com/title/tt11242162/');
const page7Promise = page.waitForEvent('popup'); // What Drives Us
  await page.getByRole('link', { name: 'https://www.imdb.com/title/tt14450630/' }).click();
  const page7 = await page7Promise;
await page7.goto('https://www.imdb.com/title/tt14450630/');
const page8Promise = page.waitForEvent('popup'); // Safety
  await page.getByRole('link', { name: 'https://www.imdb.com/title/tt10649016/' }).click();
  const page8 = await page8Promise;
await page8.goto('https://www.imdb.com/title/tt10649016/');
const page9Promise = page.waitForEvent('popup'); // Beau Genot
  await page.getByRole('link', { name: 'Beau J. Genot of Yellowstone' }).click();
  const page9 = await page9Promise;
await page9.goto('https://www.imdb.com/name/nm0006397/');
});