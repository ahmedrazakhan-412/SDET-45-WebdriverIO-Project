/*   fetch data from an Excel file using the xlsx library in WebdriverIO:
*/

import pkg from 'xlsx';
const { XLSX } = pkg;

describe('Example Test', () => {

  it('should fetch data from Excel file', () => {
    // Read the Excel file
    const workbook = XLSX.readFile('../data.xlsx');

    // Get the worksheet and data
    const worksheet = workbook.Sheets['Sheet1'];
    const data = XLSX.utils.sheet_to_json(worksheet);
    const age = data[0].age;
    console.log(age); // 25

    // Log the data to the console
    console.log(data);

    // Use the data in your test
    // For example, to assert that the first row has a name of "John":
    expect(data[0].name).toEqual('John');
  });
});
