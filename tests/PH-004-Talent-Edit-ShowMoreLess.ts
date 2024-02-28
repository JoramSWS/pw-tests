import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/posthero/talent/');
  await page.frameLocator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').locator('div:nth-child(5) > div > .ui > .css-veveu').first().click();
  await page.frameLocator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').getByText('Show less').click();
});