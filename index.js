// testing CSV generation

// create csv data
const csvData = [
    ['Name', 'Age', 'City'],
    ['John', 25, 'New York'],
    ['Jane', 30, 'San Francisco'],
    ['Bob', 22, 'Los Angeles']
];

// convert data to csv string
function convertToCSV(data) {
    const csvArray = [];
    data.forEach(row => {
        csvArray.push(row.join(','));
    });
    return csvArray.join('\n');
}

const csvString = convertToCSV(csvData);
