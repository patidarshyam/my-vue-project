npm install export-from-json xlsx-populate


import { exportFromJSON } from 'export-from-json';
import XlsxPopulate from 'xlsx-populate';

export default {
  data() {
    return {
      data: {
        // Your data properties
      }
    };
  },
  methods: {
    async exportToExcel() {
      const fileName = 'my_data.xlsx'; // Customize the filename here
      const exportType = 'xlsx';

      const worksheetData = await exportFromJSON({
        data: this.data,
        fileName,
        exportType: 'json',
        processor: (data) => {
          return data;
        }
      });

      const workbook = await XlsxPopulate.fromBlankAsync();
      const sheet = workbook.sheet(0);
      sheet.cell('A1').value(worksheetData);

      const buffer = await workbook.outputAsync();

      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      if (navigator.msSaveBlob) {
        // For IE
        navigator.msSaveBlob(blob, fileName);
      } else {
        // For other browsers
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
      }
    }
  }
}

============
export const employees = [
    {
      id: 1,
      employeeNumber: '001',
      employeeName: 'John Doe',
      lastName: 'Doe',
      firstName: 'John',
      effectiveDate: '2022-01-01',
      expirationDate: '2022-12-31',
      empPayrollStatus: 'Active',
      jobTitle: 'Developer'
    },
    {
      id: 2,
      employeeNumber: '002',
      employeeName: 'Jane Smith',
      lastName: 'Smith',
      firstName: 'Jane',
      effectiveDate: '2022-01-01',
      expirationDate: '2022-12-31',
      empPayrollStatus: 'Active',
      jobTitle: 'Designer'
    },
    {
      id: 3,
      employeeNumber: '003',
      employeeName: 'Jane Smith',
      lastName: 'Smith',
      firstName: 'Jane',
      effectiveDate: '2022-01-01',
      expirationDate: '2022-12-31',
      empPayrollStatus: 'Active',
      jobTitle: 'Designer'
    }
  ];
  export const employeeDetails = {
  domain: 'Domain Value',
  group: 'Group Value',
  division: 'Division Value',
  area: 'Area Value',
  district: 'District Value',
  citySalesManager: 'City Sales Manager Value',
  zone: 'Zone Value',
  specialRoles: 'Special Roles Value',
  type: 'Type Value',
  status: 'Status Value',
  category: 'Category Value'
};
