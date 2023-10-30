<template>
  <div class="container f-family">
    <h2 class="mt-4">Employee List</h2>
    <ul class="list-group col-form-label text-end">
      <li
        class="list-group-item"
        v-for="employee in employees"
        :key="employee.id"
        @click="toggleDetails(employee)"
      >
        <div>
          <strong>{{ employee.fullname }}</strong> - {{ employee.fatherName }}
          <div v-if="employee.showDetails" class="row">
            <div class="col-sm-6">
              <p><strong >Mother's Name:</strong> {{ employee.motherName }}</p>
              <p><strong>Email:</strong> {{ employee.email }}</p>
            </div>
            <div class="col-sm-6">
              <p><strong>Address:</strong> {{ employee.correspondenceAddress }}</p>
              <p><strong>Phone Number:</strong> {{ employee.mobileNumber }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'EmployeeList',
  data() {
    return {
      employees : [],
    };
  },

  async mounted(){
    await axios.get('http://localhost:3000/posts').then(res => {
      // console.log("Res data", res.data)
      const respData = res.data;
        for(let i=0;i<respData.length;i++){
          console.log(respData[i]);
          respData[i]['showDetails'] =false
        }
        this.employees = respData;
        // console.log('Result', res)
        
    }).catch(err =>{
        console.log('Error', err);
    })
  },

  methods: {
    toggleDetails(employee) {
      employee.showDetails = !employee.showDetails;
    },
  },
  
};
</script>

<style scoped>
.text-end {
  text-align: left !important;
}

.bgColor {
    background-color: #EBF3FF;
  }

.f-family{
    font-family: Georgia;
  }

@media (max-width: 768px) {
  .col-form-label.text-end {
    text-align: start !important;
  }
}
</style>