// Front Page to Production Services via learn more; to Brand Content via hero link;
// back to Production Services via breadcrumb; to Rock Docs via hero link;
// back to Production Services via footer link
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.locator('#studios').getByRole('link', { name: 'learn more' }).click();
  await page.getByRole('link', { name: 'brand content' }).click();
  await page.locator('.breadcrumb.breadcrumbs.avia-breadcrumbs').getByRole('link', { name: 'Production Services' }).click();
  await page.getByRole('link', { name: 'Rock Docs' }).click();
  await page.locator('#footer').getByRole('link', { name: 'Production Services' }).click();
});