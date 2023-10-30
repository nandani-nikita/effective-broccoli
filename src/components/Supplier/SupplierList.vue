<template>
    <div class="container f-family">
      <h2 class="mt-4">Supplier List</h2>
      <ul class="list-group col-form-label text-end">
        <li
          class="list-group-item"
          v-for="supplier in suppliers"
          :key="supplier.id"
          @click="toggleDetails(supplier)"
        >
          <div>
            <strong>{{ supplier.fullname }}</strong> - {{ supplier.state }}
            <div v-if="supplier.showDetails" class="row">
              <div class="col-sm-6">
                <p><strong >Contact Person Name:</strong> {{ supplier.contactPersonName }}</p>
                <p><strong>Contact Person Contact:</strong> {{ supplier.contactPersonContact }}</p>
              </div>
              <div class="col-sm-6">
                <p><strong>Address:</strong> {{ supplier.address }}</p>
                <p><strong>Phone Number:</strong> {{ supplier.phone1 }}</p>
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
    name: 'SupplierList',
    data() {
      return {
        // employees: [
        //   {
        //     id: '1',
        //     name: 'John Doe',
        //     email: 'john@example.com',
        //     gender: 'Male',
        //     phone: '1234567890',
        //     address: '123 Main St, City',
        //     designation: 'Software Engineer',
        //     showDetails: false,
        //   },
        //   {
        //     id: '2',
        //     name: 'Jane Smith',
        //     email: 'jane@example.com',
        //     gender: 'Female',
        //     phone: '1234567890',
        //     address: '123 Main St, City',
        //     designation: 'Software Engineer',
        //     showDetails: false,
        //   },
        //   {
        //     id: '3',
        //     name: 'Bob Johnson',
        //     email: 'bon@example.com',
        //     gender: 'Male',
        //     phone: '1234567890',
        //     address: '123 Main St, City',
        //     designation: 'Software Engineer',
        //     showDetails: false,
        //   },
        // ],
        suppliers : [],
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
          this.suppliers = respData;
          // console.log('Result', res)
          
      }).catch(err =>{
          console.log('Error', err);
      })
    },
  
    methods: {
      toggleDetails(supplier) {
        supplier.showDetails = !supplier.showDetails;
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