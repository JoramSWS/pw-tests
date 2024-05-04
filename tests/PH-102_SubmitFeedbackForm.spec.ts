// navigates to PostHero Feedback form, fills it out, then checks airtable for the request
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secretweapon.studio/posthero/crew-feedback/');
  await page.getByLabel('What project did you work on?*').fill('E2E_Testing');
  await page.getByLabel('Editor', { exact: true }).check();
  await page.getByLabel('Other', { exact: true }).check();
  await page.getByLabel('Other role: please specify*').click();
  await page.getByLabel('Other role: please specify*').fill('Other role');
  await page.getByLabel('What was the greatest').click();
  await page.getByLabel('What was the greatest').fill('Testing it');
  await page.getByLabel('What was the greatest').press('Tab');
  await page.getByLabel('What was the hardest element').fill('Testing it');
  await page.getByLabel('What was the hardest element').press('Tab');
  await page.getByLabel('What features or services are').fill('Testing');
  await page.getByLabel('What features or services are').press('Tab');
  await page.getByLabel('Were there any critical').click();
  await page.getByLabel('Were there any critical').fill('Testing');
  await page.getByLabel('Were there any critical').press('Tab');
  await page.getByRole('cell', { name: 'Excellent' }).click();
  await page.getByRole('cell', { name: 'Likely', exact: true }).click();
  await page.getByLabel('Any other comments or').click();
  await page.getByLabel('Any other comments or').fill('This is a test.');
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('joram.s@secretweapon.studio');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(20000); // waits for 20 seconds
  await page.goto('https://airtable.com/app7Biv9CPKSySph7/shrQojyg1OWaaLQmT');
  await expect(page.locator('text=E2E_Testing')).toHaveText(/E2E_Testing/); // Use a regex to check presence within the combined text of all elements

});

