<template>
  <div>
    <h2>Employees</h2>
    <div class="form-container">
      <label for="domain">Domain:</label>
      <input id="domain" v-model="employee.domain" disabled>

      <label for="group">Group:</label>
      <input id="group" v-model="employee.group" disabled>

      <label for="division">Division:</label>
      <input id="division" v-model="employee.division" disabled>

      <label for="area">Area:</label>
      <input id="area" v-model="employee.area" disabled>

      <label for="district">District:</label>
      <input id="district" v-model="employee.district" disabled>

      <label for="citySalesManager">City Sales Manager:</label>
      <input id="citySalesManager" v-model="employee.citySalesManager" disabled>

      <label for="zone">Zone:</label>
      <input id="zone" v-model="employee.zone" disabled>

      <label for="specialRoles">Special Roles:</label>
      <input id="specialRoles" v-model="employee.specialRoles" disabled>

      <label for="type">Type:</label>
      <input id="type" v-model="employee.type" disabled>

      <label for="status">Status:</label>
      <input id="status" v-model="employee.status" disabled>

      <label for="category">Category:</label>
      <input id="category" v-model="employee.category" disabled>
    </div>

    <h2>Employees</h2>
    <div class="table-container">
      <input v-model="searchText" placeholder="Search">
      <table>
        <thead>
          <tr>
            <th>Employee Number</th>
            <th>Employee Name</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Effective Date</th>
            <th>Expiration Date</th>
            <th>Emp Payroll Status</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in filteredEmployees" :key="employee.id">
            <td>{{ employee.employeeNumber }}</td>
            <td>{{ employee.employeeName }}</td>
            <td>{{ employee.lastName }}</td>
            <td>{{ employee.firstName }}</td>
            <td>{{ employee.effectiveDate }}</td>
            <td>{{ employee.expirationDate }}</td>
            <td>{{ employee.empPayrollStatus }}</td>
            <td>{{ employee.jobTitle }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Admin Override Employees</h2>
    <div class="table-container">
      <input v-model="adminSearchText" placeholder="Search">
      <table>
        <thead>
          <tr>
            <th>Employee Number</th>
            <th>Employee Name</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Effective Date</th>
            <th>Expiration Date</th>
            <th>Emp Payroll Status</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="adminEmployee in filteredAdminEmployees" :key="adminEmployee.id">
            <td>{{ adminEmployee.employeeNumber }}</td>
            <td>{{ adminEmployee.employeeName }}</td>
            <td>{{ adminEmployee.lastName }}</td>
            <td>{{ adminEmployee.firstName }}</td>
            <td>{{ adminEmployee.effectiveDate }}</td>
            <td>{{ adminEmployee.expirationDate }}</td>
            <td>{{ adminEmployee.empPayrollStatus }}</td>
            <td>{{ adminEmployee.jobTitle }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: {
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
      },
      employees: [
        {
          id: 1,
          employeeNumber: '001',
          employeeName: 'John Doe',
          lastName: 'Doe',
          firstName: 'John',
          effectiveDate: '2022-01-01',
          expirationDate: '2022-12-31',
          empPayrollStatus: 'Active',
          jobTitle: 'Manager'
        },
        {
          id: 2,
          employeeNumber: '002',
          employeeName: 'Jane Smith',
          lastName: 'Smith',
          firstName: 'Jane',
          effectiveDate: '2022-02-01',
          expirationDate: '2022-11-30',
          empPayrollStatus: 'Active',
          jobTitle: 'Developer'
        }
      ],
      searchText: '',
      adminEmployees: [],
      adminSearchText: ''
    };
  },
  computed: {
    filteredEmployees() {
      if (this.searchText) {
        return this.employees.filter((employee) =>
          employee.employeeName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } else {
        return this.employees;
      }
    },
    filteredAdminEmployees() {
      if (this.adminSearchText) {
        return this.adminEmployees.filter((employee) =>
          employee.employeeName.toLowerCase().includes(this.adminSearchText.toLowerCase())
        );
      } else {
        return this.adminEmployees;
      }
    }
  },
  methods: {
    fetchAdminEmployees() {
      // Call the API to fetch admin employees data
      // Assign the response data to the adminEmployees array
      this.adminEmployees = [
        {
          id: 3,
          employeeNumber: '003',
          employeeName: 'Admin Employee 1',
          lastName: 'Employee 1',
          firstName: 'Admin',
          effectiveDate: '2022-03-01',
          expirationDate: '2022-10-31',
          empPayrollStatus: 'Active',
          jobTitle: 'Admin Role'
        },
        {
          id: 4,
          employeeNumber: '004',
          employeeName: 'Admin Employee 2',
          lastName: 'Employee 2',
          firstName: 'Admin',
          effectiveDate: '2022-04-01',
          expirationDate: '2022-09-30',
          empPayrollStatus: 'Active',
          jobTitle: 'Admin Role'
        }
      ];
    }
  },
  created() {
    // Fetch admin employees data when the component is created
    this.fetchAdminEmployees();
  }
};
</script>

<style>
.form-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.table-container {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

input {
  padding: 5px;
}
</style>
