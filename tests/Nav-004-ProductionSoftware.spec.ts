// Navigates from Main Page to all the pages in Production Software dropdown
// Production Hero, PlanetHero, CrewHero, PostHero
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'Production Software ﹀' }).click();
  await page.getByRole('link', { name: 'ProductionHero™' }).click();
  await page.getByRole('link', { name: 'Production Software ﹀' }).click();
  await page.getByRole('link', { name: 'PlanetHero™', exact: true }).click();
  await page.getByRole('link', { name: 'Production Software ﹀' }).click();
  await page.getByRole('link', { name: 'CrewHero™', exact: true }).click();
  await page.getByRole('link', { name: 'Production Software ﹀' }).click();
  await page.getByRole('link', { name: 'PostHero™' }).click();
});