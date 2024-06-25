// Keep streamlit active for Crewhero AI; navigate to main app, mobile app, and embedded page

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://crewhero-mb.streamlit.app/');
  await page.goto('https://crewhero.streamlit.app/');
  await page.goto('https://secretweapon.studio/crewhero/beta/');
  await page.goto('https://travelstruck.streamlit.app/')
});
