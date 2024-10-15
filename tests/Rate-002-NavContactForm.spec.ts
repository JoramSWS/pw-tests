// access Resolve Rates page, navigate to Contact Form
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweaponpost.com/resolve-collaboration-rates/');
  await page.getByRole('link', { name: 'Learn More' }).nth(1).click();
  await page.goto('https://secretweaponpost.com/resolve-collaboration-rates/');
  await page.getByRole('link', { name: 'Learn More' }).nth(2).click();
  await page.goto('https://secretweaponpost.com/resolve-collaboration-rates/');
  await page.getByRole('link', { name: 'Learn More' }).nth(3).click();
});