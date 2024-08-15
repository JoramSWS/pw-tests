// Main Page to Post page via Hero link; to Post/Talent page via image link;
// back to Post via breadcrumb; back to Post/Talent page; back to Post via footer link.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/');
  await page.locator('#post').getByRole('link', { name: 'learn more' }).click();
  await page.locator('a:has(img[alt="Worldwide post-production talent"])').click();
  await page.locator('.breadcrumb.breadcrumbs.avia-breadcrumbs').getByRole('link', { name: 'Post' }).click();
  await page.locator('a:has(img[alt="Worldwide post-production talent"])').click();
  await page.locator('#footer').getByRole('link', { name: 'Post Production' }).click();
});