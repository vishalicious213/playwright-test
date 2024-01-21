const { test, expect } = require("@playwright/test")

test("Is this Google?", async ({ page }) => {
    await page.goto("https://google.com")
    await expect(page).toHaveTitle("Google")
})

test("Is this Hacker News?", async ({ page }) => {
    await page.goto("https://news.ycombinator.com")
    await expect(page).toHaveTitle("Hacker News")
})