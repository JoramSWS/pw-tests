// navigates to PostHero contact form, fills it out, then checks airtable for the request
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://secretweapon.studio/production-technology/posthero/');
    await page.getByLabel('What type of project are you').selectOption('Commercial');
    await page.getByLabel('How big is your post team?*').selectOption('1');
    await page.getByRole('group', { name: 'Do you need Resolve training' }).getByLabel('No').check();
    await page.getByRole('group', { name: 'Do you need Resolve-' }).getByLabel('No').check();
    await page.getByRole('group', { name: 'Do you want a hands-on demo' }).getByLabel('Yes').check();
    await page.getByLabel('-3 weeks').check();
    await page.getByPlaceholder('First').click();
    await page.getByPlaceholder('First').fill('Joram');
    await page.getByPlaceholder('Last').click();
    await page.getByPlaceholder('Last').fill('Schwartz');
    await page.locator('#input_40_16').click();
    await page.locator('#input_40_16').fill('test');
    await page.getByLabel('Email*').click();
    await page.getByLabel('Email*').fill('joram.s@secretweapon.studio');
    await page.getByPlaceholder('please include country code').click();
    await page.getByPlaceholder('please include country code').fill('9175845924');
    await page.getByPlaceholder('Street Address').click();
    await page.getByPlaceholder('Street Address').fill('123 fake street');
    await page.getByPlaceholder('City').click();
    await page.getByPlaceholder('City').fill('Oakland');
    await page.getByPlaceholder('City').press('Tab');
    await page.getByPlaceholder('State / Province').fill('CA');
    await page.getByPlaceholder('ZIP / Postal Code').click();
    await page.getByPlaceholder('ZIP / Postal Code').fill('94602');
    await page.getByLabel('How did you hear about').click();
    await page.getByLabel('How did you hear about').fill('test');
    await page.getByRole('button', { name: 'Submit Request' }).click();
    await page.waitForTimeout(20000); // waits for 20 seconds
    await page.goto('https://airtable.com/app7Biv9CPKSySph7/shrIOpAJpyVPhTPMt');
    await page.getByText('Joram').click();
});