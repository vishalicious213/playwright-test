// testing CSV generation

// create csv data
const csvData = [
    ['Name', 'Age', 'City'],
    ['John', 25, 'New York'],
    ['Jane', 30, 'San Francisco'],
    ['Bob', 22, 'Los Angeles']
];

console.log(csvData)

// convert data to csv string
function convertToCSV(data) {
    const csvArray = [];
    data.forEach(row => {
        csvArray.push(row.join(','));
    });
    return csvArray.join('\n');
}

const csvString = convertToCSV(csvData);

console.log(csvString)

// create blob and url
const blob = new Blob([csvString], { type: 'text/csv' });
const url = URL.createObjectURL(blob);

console.log(blob)
console.log(url)

// create download link
const downloadLink = document.createElement('a');
downloadLink.href = url;
downloadLink.download = 'data.csv';

console.log(downloadLink)