// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function saveHackerNewsArticles() {
    // launch browser
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()

    // go to Hacker News
    await page.goto("https://news.ycombinator.com")

    // get titles and urls
    const articles = await page.evaluate(() => {
        const articleData = document.querySelectorAll(".titleline a")
        const articlesArray = []
        // console.log(articleData)

        for (const article of articleData) {
            const title = article.innerText
            const url = article.href
            const unneeded = article.childNodes[0].firstChild
            // console.table(title, url, plop)
            if (!unneeded) {
                articlesArray.push([title, url])
            }
        }

        console.log(articlesArray)
    })
}

(async () => {
    await saveHackerNewsArticles()
})();
