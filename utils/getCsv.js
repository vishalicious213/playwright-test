const fs = require('fs')

const csvFilePath = './top-ten.csv'

// Read the CSV file asynchronously
fs.readFile(csvFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading CSV file:', err)
        return
    }

    // Parse CSV data
    const rows = data.split('\n')
    const headers = rows[0].split(',')

    const results = rows.slice(1).map(row => {
        const values = row.split(',')
        return headers.reduce((obj, header, index) => {
            obj[header.trim()] = values[index].trim()
            return obj
        }, {})
    })

    // Display the contents of the CSV file
    console.log("\n-+- TOP TEN ARTICLES FROM HACKER NEWS -+- \n")

    results.forEach(result => {
        console.log("Title: ", result.Title)
        console.log("URL:   ", result.URL, "\n")
    })
})
