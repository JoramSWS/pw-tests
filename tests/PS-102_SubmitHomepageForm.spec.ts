// navigates to ProdHero waitlist form, fills it out, then checks airtable for the request
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://secretweapon.studio/');
 await page.getByLabel('First').click();
 await page.getByLabel('First').fill('Joram');
 await page.getByLabel('Last').click();
 await page.getByLabel('Last').fill('Schwartz');
 await page.getByLabel('Company').click();
 await page.getByLabel('Company').fill('test');
 await page.getByLabel('Email(Required)').click();
 await page.getByLabel('Email(Required)').fill('joram.s@secretweapon.studio');
 await page.getByLabel('Mobile').click();
 await page.getByLabel('Mobile').fill('555-555-1234');
 await page.getByLabel('How can we make your life easier?').click();
 await page.getByLabel('How can we make your life easier?').fill('Just keep the form working!');
 await page.getByRole('button', { name: 'Send' }).click();
 await page.waitForTimeout(20000); // waits for 20 seconds
 await page.goto('https://airtable.com/app7Biv9CPKSySph7/shrfr5uJvsWlK7kBD');
 await expect(page.locator('text=Joram')).toHaveText(/Joram/); // Use a regex to check presence within the combined text of all elements

});