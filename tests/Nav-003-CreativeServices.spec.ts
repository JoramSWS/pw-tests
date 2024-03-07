// Navigates from Main Page to all the pages in Creative Services dropdown
// Production Studio, Brand Content, Rock Docs, Production Servces
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'Creative Services ﹀' }).click();
  await page.getByRole('link', { name: 'Production Studio' }).click();
  await page.getByRole('link', { name: 'Creative Services ﹀' }).click();
  await page.getByRole('link', { name: 'Brand Content' }).click();
  await page.getByRole('link', { name: 'Creative Services ﹀' }).click();
  await page.getByRole('link', { name: 'Rock Docs' }).click();
  await page.getByRole('link', { name: 'Creative Services ﹀' }).click();
  await page.getByRole('link', { name: 'Production Services' }).click();
});