// Navigates to Case Studies and out to press and imdb links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.slow(); // Easy way to triple the default timeout
    await page.goto('https://secretweapon.tech/posthero/case-studies/');
    const page6Promise = page.waitForEvent('popup');  // Rise
    await page.getByRole('link', { name: 'https://www.imdb.com/title/tt11242162/' }).click();
    const page6 = await page6Promise;
    await page6.goto('https://www.imdb.com/title/tt11242162/');
    const page7Promise = page.waitForEvent('popup'); // What Drives Us
    await page.getByRole('link', { name: 'https://www.imdb.com/title/tt14450630/' }).click();
    const page7 = await page7Promise;
    await page7.goto('https://www.imdb.com/title/tt14450630/');
});