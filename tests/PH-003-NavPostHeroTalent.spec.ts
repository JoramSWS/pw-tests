// Navigates from .tech homepage to PostHero page to Talent search page, then checks each viewk, clicking on one of the last crew in each.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.tech/');
  await page.getByRole('link', { name: 'OK' }).click();
  await page.locator('#posthero').getByRole('link', { name: 'learn more' }).click();
  await page.getByLabel('Search').click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByRole('button', { name: 'More' }).click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByRole('button', { name: 'More' }).click();
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight); // scroll to bottom
});
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Diana Cordero Gamboa');
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Color').click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Jabez Nelson');
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('VFX').click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Damien Stewart');
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Sound').click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Ryan Khan');
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Media & Delivery').click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Jabez Nelson');
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('View All').click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByRole('button', { name: 'More' }).click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByRole('button', { name: 'More' }).click();
  await page.locator('#miniextensions-iframe-embed-0OolpazVyjsidYGqtaaR iframe').contentFrame().getByText('Sakya Calsoyas');
});