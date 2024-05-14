<template>
    <div>
        <div class="modal" tabindex="-1" role="dialog" v-if="showModal" :class="{ 'show': showModal }">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ modalTitle }}</h5>
                        <button type="button" class="close" @click="closeModal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p v-if="successMessage">{{ successMessage }}</p>
                        <p v-if="errorMessage">{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="add-bank-form">
            <h2>Add Bank Account</h2>
            <form @submit.prevent="addBankAccount">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="formData.name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="short_name">Short Name:</label>
                    <input type="text" id="short_name" v-model="formData.short_name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="account_number">Account Number:</label>
                    <input type="text" id="account_number" v-model="formData.account_number" class="form-control"
                        required>
                </div>
                <div class="form-group">
                    <label for="ifsc">IFSC Code:</label>
                    <input type="text" id="ifsc" v-model="formData.ifsc" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="branch">Branch:</label>
                    <input type="text" id="branch" v-model="formData.branch" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" id="address" v-model="formData.address" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="current_balance">Current Balance:</label>
                    <input type="number" id="current_balance" v-model="formData.current_balance" class="form-control"
                        required>
                </div>
                <div class="form-group">
                    <label for="is_active">Active:</label>
                    <input type="checkbox" id="is_active" v-model="formData.is_active" class="form-check-input">
                </div>
                <button type="submit" class="btn btn-primary">Add Bank Account</button>
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
                name: "",
                short_name: "",
                account_number: "",
                ifsc: "",
                branch: "",
                address: "",
                current_balance: 0,
                is_active: true
            },
            showModal: false,
            successMessage: "",
            errorMessage: "",
            modalTitle: ""
        };
    },
    mounted() {
        console.log(this.showModal);
        this.showModal = false;
        console.log(this.showModal);
    },

    methods: {
        clearForm() {
            this.formData = {
                name: "",
                short_name: "",
                account_number: "",
                ifsc: "",
                branch: "",
                address: "",
                current_balance: 0,
                is_active: true
            }


        },
        async addBankAccount() {
            try {
                const response = await fetch(`${this.url}/account`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.formData)
                });
                if (response.ok) {
                    this.successMessage = "Bank account added successfully!";
                    this.modalTitle = "Success";
                    this.errorMessage = "";
                    this.clearForm();
                    this.showModalTimer();

                } else {

                    // console.error("Error adding bank account:", error);

                    const errorData = await response.json();
                    this.errorMessage = errorData.message || "Failed to add bank account";
                    this.modalTitle = "Error";
                    this.successMessage = "";
                    this.showModalTimer();
                }
            } catch (error) {
                console.error("Error adding bank account:", error);
                this.errorMessage = "Failed to add bank account. Please try again later.";
                this.modalTitle = "Error";
                this.successMessage = "";
                this.showModalTimer();

            }
        },
        closeModal() {
            // Method to close the modal
            this.showModal = false;
            this.successMessage = "";
            this.errorMessage = "";
            this.modalTitle = "";
        },
        showModalTimer() {
            this.showModal = true;

            setTimeout(() => {
                this.showModal = false;
            }, 5000);
        }
    }
};
</script>

<style scoped>
.add-bank-form {
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
}

input[type="text"],
input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input[type="checkbox"] {
    margin-right: 5px;
}

.btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary {
    background-color: #007bff;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1050;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
    display: flex;
    align-items: center;
    /* Vertically center */
    justify-content: center;
    /* Horizontally center */
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}

.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 15px;
}

.modal-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 15px;
    border-top: 1px solid #e9ecef;
    border-bottom-right-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
}

.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}

.modal.show {
    display: block;
}
</style>