// All the main Tech pages via all the links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.locator('#tech').getByRole('link', { name: 'learn more' }).click();
  await page.locator('#posthero').getByRole('link', { name: 'learn more' }).click();
  await page.locator('.breadcrumb.breadcrumbs.avia-breadcrumbs').getByRole('link', { name: 'Production Technology' }).click();
  await page.locator('#crewhero').getByRole('link', { name: 'learn more' }).click();
  await page.locator('.breadcrumb.breadcrumbs.avia-breadcrumbs').getByRole('link', { name: 'Production Technology' }).click();
  await page.locator('#planethero').getByRole('link', { name: 'learn more' }).click();
  await page.locator('.breadcrumb.breadcrumbs.avia-breadcrumbs').getByRole('link', { name: 'Production Technology' }).click();
  await page.locator('#prodhero').getByRole('link', { name: 'learn more' }).click();
  await page.locator('#footer').getByRole('link', { name: 'PostHero™' }).click();
  await page.locator('#footer').getByRole('link', { name: 'CrewHero™' }).click();
  await page.locator('#footer').getByRole('link', { name: 'PlanetHero™' }).click();
  await page.locator('#footer').getByRole('link', { name: 'ProductionHero™' }).click();
});