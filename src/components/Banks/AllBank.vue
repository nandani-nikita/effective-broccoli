<template>
    <div>
        <h2>All Accounts</h2>
        <!-- <router-link to="/add-bank">Add Bank Account</router-link> -->
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
                <span class="detail-button" @click="toggleDetails(account._id)">
                    <i v-if="selectedAccount === account._id" class="fa-regular fa-eye-slash"></i>
                    <i v-else class="fa-regular fa-eye"></i>
                </span>

                <router-link class="edit-button" :to="{ name: 'AddBank', params: { accountId: account._id } }">
                    <i class="fa-regular fa-pen-to-square"></i>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    components: {
    },
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
    padding: 0 10px;
    /* Add padding to the container */
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
    float: left;
    cursor: pointer;
}
.edit-button {
    float: right;
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