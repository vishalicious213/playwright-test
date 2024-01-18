import { test, expect } from '@playwright/test';

test('Portfolio test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://vish213-portfolio-v3.netlify.app/');
  await page.getByRole('button', { name: 'Front-End Development' }).click();
  await page.getByRole('button', { name: 'Back-End Development' }).click();
  await page.getByRole('img', { name: 'Back of Vish\'s head, holding' }).click();
});