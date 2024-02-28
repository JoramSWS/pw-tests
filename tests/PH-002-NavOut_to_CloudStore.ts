import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/posthero/');
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Blackmagic Design Cloud Store' }).click();
  const page6 = await page6Promise;
});