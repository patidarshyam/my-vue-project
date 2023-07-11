======
=============

  <div>
    <div>
      <!-- Code for the disabled input fields -->
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


<script>
export default {
  data() {
    return {
      employee: {
        domain: '',
        group: '',
        division: '',
        area: '',
        district: '',
        citySalesManager: '',
        zone: '',
        specialRoles: '',
        type: '',
        status: '',
        category: ''
      },
      searchText: '',
      adminSearchText: '',
      employees: [
        // Dummy employee data
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
        }
      ]
    };
  },
  computed: {
    filteredEmployees() {
      // Filter employees based on search text
      return this.employees.filter(employee =>
        employee.employeeName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    filteredAdminEmployees() {
      // Filter admin override employees based on search text
      return this.employees.filter(employee =>
        employee.employeeName.toLowerCase().includes(this.adminSearchText.toLowerCase())
      );
    }
  }
};
</script>

<style>
/* Add your styles here */
.table-container {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border: 1px solid #ddd;
}

input[type="text"] {
  margin-bottom: 10px;
  padding: 4px;
  width: 200px;
}

/* Add any additional styles as needed */
</style>
=================

========
