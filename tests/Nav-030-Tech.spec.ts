// All the main Tech pages via all the links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(40000); // Increase timeout to 40 seconds
  await page.goto('https://secretweapon.tech/');
  await page.locator('#footer').getByRole('link', { name: 'PostHero™' }).click();
  await page.locator('#footer').getByRole('link', { name: 'CrewHero™' }).click();
  await page.locator('#footer').getByRole('link', { name: 'PlanetHero™' }).click();
  await page.locator('#footer').getByRole('link', { name: 'ProductionHero™' }).click();
});