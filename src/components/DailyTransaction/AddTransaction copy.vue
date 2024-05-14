<template>
  <div>
      <!-- Transaction Form -->
      <div class="add-transaction-form">
          <h2>{{ editingTransaction ? 'Edit Transaction' : 'Add Transaction' }}</h2>
          <form @submit.prevent="editingTransaction ? updateTransaction() : addTransaction()">
              <!-- Form fields for transaction details -->
              <div v-if="editingTransaction">
                  <p>Transaction ID: {{ editingTransaction }}</p>
                  <!-- Populate form fields with data fetched from API -->
              </div>
              <!-- Bank Short Name -->
              <div class="form-group">
                    <label for="short_name">Bank Name:</label>
                    <select id="short_name" v-model="bank" class="form-control" required @change="onBankNameChange">
                        <option value="Select Bank" selected hidden>Select Bank</option>
                        <option v-for="bank in bankDetails" :key="bank._id" :value="bank">{{ bank.short_name }}</option>
                    </select>
                </div>
              <!-- Transaction Date -->
              <div class="form-group">
                  <label for="transaction_date">Transaction Date:</label>
                  <input type="date" id="transaction_date" v-model="formData.transaction_date" class="form-control" required>
              </div>
              <!-- Head -->
              <div class="form-group">
                  <label for="head">Head:</label>
                  <input type="text" id="head" v-model="formData.head" class="form-control" required>
              </div>
              <!-- Sub Head -->
              <div class="form-group">
                  <label for="sub_head">Sub Head:</label>
                  <input type="text" id="sub_head" v-model="formData.sub_head" class="form-control" required>
              </div>
              <!-- Bank Narration -->
              <div class="form-group">
                  <label for="bank_narration">Bank Narration:</label>
                  <input type="text" id="bank_narration" v-model="formData.bank_narration" class="form-control" required>
              </div>
              <!-- Value Date -->
              <div class="form-group">
                  <label for="value_date">Value Date:</label>
                  <input type="date" id="value_date" v-model="formData.value_date" class="form-control" required>
              </div>
              <!-- Debit -->
              <div class="form-group">
                  <label for="debit">Debit:</label>
                  <input type="number" id="debit" v-model="formData.debit" class="form-control" required>
              </div>
              <!-- Credit -->
              <div class="form-group">
                  <label for="credit">Credit:</label>
                  <input type="number" id="credit" v-model="formData.credit" class="form-control" required>
              </div>
              <!-- Remarks -->
              <div class="form-group">
                  <label for="remarks">Remarks:</label>
                  <input type="text" id="remarks" v-model="formData.remarks" class="form-control" required>
              </div>
              <!-- Payment Received From -->
              <div class="form-group">
                  <label for="payment_received_from">Payment Received From:</label>
                  <input type="text" id="payment_received_from" v-model="formData.payment_received_from" class="form-control">
              </div>
              <!-- Payment Received For -->
              <div class="form-group">
                  <label for="payment_received_for">Payment Received For:</label>
                  <input type="text" id="payment_received_for" v-model="formData.payment_received_for" class="form-control">
              </div>
              <!-- Payment Sent To -->
              <div class="form-group">
                  <label for="payment_sent_to">Payment Sent To:</label>
                  <input type="text" id="payment_sent_to" v-model="formData.payment_sent_to" class="form-control">
              </div>
              <!-- Payment Sent For -->
              <div class="form-group">
                  <label for="payment_sent_for">Payment Sent For:</label>
                  <input type="text" id="payment_sent_for" v-model="formData.payment_sent_for" class="form-control">
              </div>
              <!-- Tags -->
              <div class="form-group">
                  <label for="tags">Tags:</label>
                  <input type="text" id="tags" v-model="formData.tags" class="form-control">
              </div>
              <!-- Balance Before Transaction -->
              <div class="form-group">
                  <label for="balance_before_trx">Balance Before Transaction:</label>
                  <input type="number" id="balance_before_trx" disabled v-model="formData.balance_before_trx" class="form-control" required>
              </div>
              <!-- Balance After Transaction -->
              <div class="form-group">
                  <label for="balance_after_trx">Balance After Transaction:</label>
                  <input type="number" id="balance_after_trx" disabled v-model="formData.balance_after_trx" class="form-control" required>
              </div>
              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary">{{ editingTransaction ? 'Update' : 'Add' }} Transaction</button>
          </form>
      </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  data() {
      return {
          url: store.state.currentUrl,
          formData: {
            short_name: "Select Bank",
              transaction_date: "",
              head: "",
              sub_head: "",
              bank_narration: "",
              value_date: "",
              debit: 0,
              credit: 0,
              remarks: "",
              payment_received_from: "",
              payment_received_for:"",
              payment_sent_to: "",
              payment_sent_for: "",
              tags: [],
              balance_before_trx: 0,
              balance_after_trx: 0
          },
          editingTransaction: null,
          bankDetails: [],
          selectedBank:{}
      };
  },
  mounted() {
      // Check if the route contains a transaction ID for editing
      // console.log(this.);
      if (this.$route.params.transactionId) {
          this.editingTransaction = this.$route.params.transactionId;
          // this.populateFormData(this.editingTransaction);
      }
      this.fetchBankDetails();
  },
  methods: {
      // // Fetch transaction details for editing
      // async populateFormData(transactionId) {
      //     // Implement similar to the populateFormData method for bank accounts
      // },
      // Clear form data
      clearForm() {
          // Implement similar to the clearForm method for bank accounts
      },
      async fetchBankDetails() {
            try {
                const response = await fetch(`${this.url}/account`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response.ok) {
                    const accountData = await response.json();
                    console.log(accountData);
                    this.bankDetails = accountData;
                    // Extract bank short names from transaction data
                    // this.bankShortNames = accountData.map(transaction => transaction.bank_short_name);
                } else {
                    throw new Error("Failed to fetch bank short names");
                }
            } catch (error) {
                console.error("Error fetching bank short names:", error);
            }
        },
      // Add transaction
      async addTransaction() {
          // Implement similar to the addBankAccount method for bank accounts
      },
      // Update transaction
      async updateTransaction() {
          // Implement similar to the updateAccount method for bank accounts
      },

      async onBankNameChange() {
        this.formData.balance_before_trx = this.bank.current_balance;
      },
  }
};
</script>

<!-- 
<style scoped>
.add-transaction-form {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    display: block; /* Change from float to block */
    width: 100%; /* Use full width for labels */
}

input[type="text"],
input[type="number"],
input[type="date"],
textarea {
    width: 100%; /* Use full width for input fields */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Ensure padding and border are included in the width */
    margin-top: 5px; /* Add some space between input fields */
}

textarea {
    resize: vertical; /* Allow vertical resizing of textarea */
}

.btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block; /* Ensure buttons are full width */
    margin-top: 10px; /* Add some space between buttons */
}

.btn-primary {
    background-color: #007bff;
}

.btn-primary:hover {
    background-color: #0056b3;
}
</style> -->


<style scoped>
.add-transaction-form {
    max-width: 100%;
    margin: auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
input[type="date"],
textarea,
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
}

select {
    appearance: none; /* Remove default appearance for select dropdown */
    background-image: url("data:image/svg+xml;utf8,<svg fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5H7z'/></svg>"); /* Custom dropdown arrow */
    background-repeat: no-repeat;
    background-position: right 10px top 50%;
    background-size: 20px auto;
    padding-right: 30px; /* Ensure space for the arrow */
}

.btn {
    padding: 12px 24px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
}

.btn-primary {
    background-color: #007bff;
}

.btn-primary:hover {
    background-color: #0056b3;
}
</style>
