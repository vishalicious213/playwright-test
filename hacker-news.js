// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright")
const fs = require("fs")

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
            // console.table(title, url, unneeded)
            if (!unneeded) {
                articlesArray.push([title, url])
            }
        }

        return articlesArray.slice(0, 10)
    })

    return articles
}

function createCSV(data) {
    // convert data to csv string
    function convertToCSV(data) {
        const csvArray = []
        data.forEach(row => {
            csvArray.push(row.join(','))
        });
        return csvArray.join('\n')
    }

    const csvString = convertToCSV(data)
    // console.log(csvString)

    // filename for csv
    const csvFile = "top-ten.csv"

    // write to file
    fs.writeFileSync(csvFile, csvString, "utf-8")

    console.log("CSV file created at: ", csvFile )
}

(async () => {
    const articles = await saveHackerNewsArticles()
    // console.log(articles)
    createCSV(articles)
})();
