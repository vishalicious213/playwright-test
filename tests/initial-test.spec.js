const { test, expect } = require("@playwright/test")

test("Is this Google?", async ({ page }) => {
    await page.goto("https://google.com")
    await expect(page).toHaveTitle("Google")
})