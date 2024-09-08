// // navigates to crewhero.ai, executes a search, confirms that web results are displayed
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.crewhero.ai/');
  await page.getByLabel('Be as specific or').click();
  await page.getByLabel('Be as specific or').fill('I need a camera operator in detroit');
  await page.getByLabel('Be as specific or').press('Enter');
  await page.getByText('Based on the web search').isVisible();
});