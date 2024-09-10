// navigates to crewhero.ai, executes a search, clicks on a profile, and verifies the profile page is displayed
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.crewhero.ai/');
  await page.getByLabel('Be as specific or').click();
  await page.getByLabel('Be as specific or').fill('I am looking for Greg Olliver');
  await page.getByLabel('Be as specific or').press('Enter');
  await page.waitForTimeout(10000); // waits for 10 seconds
  await page.locator('[data-testid="stIFrame"]').contentFrame().locator('iframe').contentFrame().getByRole('button', { name: 'View Profile' }).click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.locator('#miniextensions-iframe-embed-VTK1HS0iiUhXFGEw5X71 iframe').contentFrame().getByRole('heading', { name: 'Greg Olliver' }).click();
});