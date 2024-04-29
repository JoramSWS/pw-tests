// Navigates to, and through, the PostHeroEvo website ending with the footer link to secretweapon.sudio 
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.postheroevo.com/');
  await page.getByLabel('Start Learning').click();
  await page.locator('#comp-lug0wrcf__ee80b552-fd01-44cd-a4c5-38c157bb43e7 > .VU4Mnk').click();
  await page.getByRole('link', { name: 'Setting Up - Step 4: Set Up a' }).click();
  await page.getByTestId('false').click();
  await page.getByRole('link', { name: 'Start Now ➜' }).first().click();
  await page.locator('#comp-lv1kt4q52__56a80658-b92f-4e39-a9bf-69710117449a > .h1DYhE').click();
  await page.getByRole('link', { name: 'Media Management' }).click();
  await page.getByRole('link', { name: 'Start Now ➜' }).nth(1).click();
  await page.locator('#comp-lv1n8xtd__a84b76f3-0be7-4a8e-bd58-525b3fcbd348 > .h1DYhE').click();
  await page.getByRole('link', { name: 'Remote Monitoring' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#comp-lv1mmtb94_r_comp-lv0glsym').getByTestId('linkElement').click();
  const page1 = await page1Promise;
});