<template>
  <!-- Your template code -->
  <div>
    <label for="employeeId">Employee ID:</label>
    <input type="text" id="employeeId" v-model="employeeId" @input="lookupEmployee">
    
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="employee.name" readonly>
    </div>
    
    <div>
      <label for="designation">Designation:</label>
      <input type="text" id="designation" v-model="employee.designation" readonly>
    </div>
    
    <div>
      <label for="department">Department:</label>
      <input type="text" id="department" v-model="employee.department" readonly>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employeeId: '',
      employee: {
        name: '',
        designation: '',
        department: ''
      }
    };
  },
  methods: {
    lookupEmployee() {
      axios.get('http://localhost:3000/posts') // Replace with the correct JSON file path or URL
        .then(response => {
          if (Array.isArray(response.data.employees)) {
            const employees = response.data.employees;
            const foundEmployee = employees.find(employee => employee.id === this.employeeId);

            if (foundEmployee) {
              this.employee.currentCompanyName = foundEmployee.currentCompanyName;
              this.employee.currentCompanyDesignation = foundEmployee.currentCompanyDesignation;
              this.employee.currentCompanyDepartment = foundEmployee.currentCompanyDepartment;
            } else {
              // If employee ID is not found, clear the fields
              this.employee.name = '';
              this.employee.designation = '';
              this.employee.department = '';
            }
          } else {
            console.error('Invalid data format in JSON file.');
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
};
</script>
