<template>
  <div>
    <label for="ifscCode">IFSC Code:</label>
    <input type="text" id="ifscCode" v-model="ifscCode" />
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name : "TesT",
  data() {
    return {
      ifscCode: '',
    };
  },
  methods: {
    submitForm() {
      // Convert IFSC code to uppercase before sending it to the server
      const uppercaseIFSC = this.ifscCode.toUpperCase();
      
      // Send the uppercase IFSC code to the server using an HTTP request (e.g., Axios)
      // Replace the following code with your actual API call.
      axios.post('your-api-endpoint', { ifscCode: uppercaseIFSC })
        .then((response) => {
          // Handle the response from the server
          console.log('IFSC code submitted successfully:', response.data);
        })
        .catch((error) => {
          // Handle any errors from the server
          console.error('Error submitting IFSC code:', error);
        });
    },
  },
};
</script>
