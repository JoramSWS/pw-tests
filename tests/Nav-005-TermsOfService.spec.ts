// Navigates from Main Page to all the Legal selections
// SWS Terms of Service, CrewHero ToS, PlanetHero ToS, Privacy Policy
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'SWS Terms of Service' }).click();
  await page.getByRole('link', { name: 'CrewHero™ ToS' }).click();
  await page.getByRole('link', { name: 'PlanetHero™ ToS' }).click();
  await page.locator('#menu-item-4938').getByRole('link', { name: 'Privacy Policy' }).click();
});