// Navigates to Case Studies and out to press and imdb links
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.slow(); // Easy way to triple the default timeout
    await page.goto('https://secretweapon.tech/posthero/case-studies/');
    const page7Promise = page.waitForEvent('popup'); // What Drives Us
    await page.getByRole('link', { name: 'https://www.imdb.com/title/tt14450630/' }).click();
    const page7 = await page7Promise;
    await page7.goto('https://www.imdb.com/title/tt14450630/');
    const page8Promise = page.waitForEvent('popup'); // Safety
    await page.getByRole('link', { name: 'https://www.imdb.com/title/tt10649016/' }).click();
    const page8 = await page8Promise;
    await page8.goto('https://www.imdb.com/title/tt10649016/');
    const page9Promise = page.waitForEvent('popup'); // Beau Genot
    await page.getByRole('link', { name: 'Beau J. Genot of Yellowstone' }).click();
    const page9 = await page9Promise;
    await page9.goto('https://www.imdb.com/name/nm0006397/');
});