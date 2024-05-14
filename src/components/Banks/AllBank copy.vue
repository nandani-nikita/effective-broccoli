<template>
    <div>
      <h2>All Accounts</h2>
      <div class="account-list">
        <div v-for="account in accounts" :key="account._id" class="account-card">
          <div class="card-header">
            <span class="card-title">{{ account.name }}</span>
            <span class="card-number">{{ account.account_number }}</span>
          </div>
          <div class="card-body" v-if="selectedAccount === account._id">
            <p><strong>IFSC Code:</strong> {{ account.ifsc }}</p>
            <p><strong>Branch:</strong> {{ account.branch }}</p>
            <p><strong>Address:</strong> {{ account.address }}</p>
            <p><strong>Current Balance:</strong> {{ account.current_balance }}</p>
            <p v-if="account.is_active"><strong>Status:</strong> Active</p>
            <p v-else><strong>Status:</strong> Inactive</p>
          </div>
          <button class="detail-button" @click="toggleDetails(account._id)">
            {{ selectedAccount === account._id ? 'Hide Details' : 'Show Details' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import store from '@/store';
  
  export default {
    data() {
      return {
        accounts: [],
        selectedAccount: null,
        apiUrl: store.state.currentUrl + "/account"
      };
    },
    mounted() {
      this.fetchAccounts();
    },
    methods: {
      async fetchAccounts() {
        try {
          const response = await fetch(this.apiUrl);
          if (response.ok) {
            this.accounts = await response.json();
            console.log(this.accounts);
          } else {
            throw new Error("Failed to fetch accounts");
          }
        } catch (error) {
          console.error("Error fetching accounts:", error);
        }
      },
      toggleDetails(accountId) {
        this.selectedAccount = this.selectedAccount === accountId ? null : accountId;
      }
    }
  };
  </script>
  
 <style scoped>
.account-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px; /* Add padding to the container */
}

.account-card {
  width: calc(30% - 20px);
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.card-title {
  font-weight: bold;
}

.card-number {
  font-size: 0.8rem;
  color: #666;
}

.card-body {
  margin-top: 10px;
}

.detail-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .account-card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 576px) {
  .account-card {
    width: calc(100% - 20px);
  }
}
</style>
