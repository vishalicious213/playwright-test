// import { test, expect } from '@playwright/test';
const { test, expect } = require("@playwright/test")

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://vish213-portfolio-v3.netlify.app/');
  await page.getByRole('button', { name: 'Front-End Development' }).click();
  await page.getByRole('button', { name: 'Back-End Development' }).click();
  await page.getByRole('img', { name: 'Back of Vish\'s head, holding' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'BloomTech: Full-Stack Web' }).click();
  const page1 = await page1Promise;
});