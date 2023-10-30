<template>
  <div class="container mt-2">
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">View Employee Details</h2>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label for="empId">Employee ID:</label>
          <input type="text" class="form-control" v-model="empId" @input="searchEmployee" />
        </div>
        <div v-if="employeeDetails" class="mt-4">
          <h3 class="card-title">Employee Details</h3>
          <div class="card">
            <div class="card-body">
              <p class="card-text"><strong>ID:</strong> {{ employeeDetails.id }}</p>
              <p class="card-text"><strong>Name:</strong> {{ employeeDetails.fullname }}</p>
              <p class="card-text"><strong>Fathers' Name:</strong> {{ employeeDetails.fatherName }}</p>
              <!-- Display other employee details as needed -->
            </div>
          </div>
        </div>
        <p v-else class="mt-4">No employee found with ID: {{ empId }}</p>
        
        <!-- Display a list of all employees -->
        <!-- <div class="mt-4">
          <h3 class="card-title">All Employees</h3>
          <ul>
            <li v-for="employee in employees" :key="employee.id">
              <p><strong>ID:</strong> {{ employee.id }}</p>
              <p><strong>Name:</strong> {{ employee.name }}</p>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EmployeeView',
  data() {
    return {
      empId: '',
      employees: [],
      employeeDetails: null,
    };
  },
  methods: {
    fetchEmployeeData() {
      // Replace this URL with the actual API endpoint
      const apiUrl = 'http://localhost:3000/posts';

      axios.get(apiUrl)
        .then(response => {
          console.log("Response", response.data)
          this.employees = response.data;
        })
        .catch(error => {
          console.error('Error fetching employee data:', error);
        });
    },
    searchEmployee() {
      // First, fetch the employee data
      this.fetchEmployeeData();

      // Then, search for the employee
      this.employeeDetails = this.employees.find(employee => employee.id == this.empId);
    },
  },
};
</script>