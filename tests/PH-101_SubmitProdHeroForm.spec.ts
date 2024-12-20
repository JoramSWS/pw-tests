// navigates to ProdHero waitlist form, fills it out, then checks airtable for the request
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://secretweapon.tech/productionhero/');
 await page.getByPlaceholder('First').click();
 await page.getByPlaceholder('First').fill('Joram');
 await page.getByPlaceholder('Last').click();
 await page.getByPlaceholder('Last').fill('Schwartz');
 await page.getByLabel('Email(Required)').click();
 await page.getByLabel('Email(Required)').fill('joram.s@secretweapon.studio');
 await page.getByLabel('Industry Role(Required)').click();
 await page.getByLabel('Industry Role(Required)').fill('test');
 await page.getByRole('button', { name: 'Request Early Invite' }).click();
 await page.waitForTimeout(10000); // waits for 10 seconds
 await page.goto('https://airtable.com/app7Biv9CPKSySph7/shrCG7D6WZGsyeHHP/tblTsLIFajEpbdNoZ');
 await page.getByTestId('gridCell-0:1').locator('div').first().getByText('Joram').click();
});