// Navigates from Main Page to all the Legal selections
// SWS Terms of Service, CrewHero ToS, PlanetHero ToS, Privacy Policy
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.getByRole('link', { name: 'Terms of Service' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
});