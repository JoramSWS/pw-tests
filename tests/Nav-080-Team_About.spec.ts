// Navigate from Main Page to Team page
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/');
  await page.getByRole('link', { name: 'Team' }).click();
});