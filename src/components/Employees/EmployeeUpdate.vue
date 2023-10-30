<template>
    <div>
      <h2>Update Employee</h2>
      <!-- Update employee form here -->

      
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmployeeUpdate',
    computed: {
      employeeId() {
        return this.$route.params.id;
      },
    },
  };
  </script>
  