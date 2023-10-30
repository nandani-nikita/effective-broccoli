<template>
  <div class="container f-family">
    <div class="shadow-sm mb-5 bg-body rounded mx-auto" v-c_width="'95%'">
      <form
        action=""
        @submit.prevent="onSubmit"
        method="post"
        class="p-5 border border-success"
      >
        <h2
          class="mt-3 mb-5 text-center fw-bold text-decoration-underline text-danger textcolor"
        >
          Add New Transaction
        </h2>
        <br />

        <div class="row">
          <div class="col-md-6">
            <!-- Transaction date row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Transaction Date</label>
              <div class="col-sm-8">
                <input
                type="date"
                class="form-control"
                v-model="selectedDate"
                :min="minDate"
                :max="maxDate"
                />
              </div>
            </div>
            <!-- Bank Name row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Bank</label>
              <div class="col-sm-8">
                <select
                  id=""
                  class="form-control"
                >
                  <option value="">Select Bank</option>
                  <option value="">Allahabad Bank</option>
                  <option value="">Andhra Bank</option>
                  <option value="">Bank of Baroda</option>
                  <option value="">Bank of India</option>
                  <option value="">Bank of Maharashtra</option>
                  <option value="">Canara Bank</option>
                  <option value="">Central Bank of India</option>
                  <option value="">Corporation Bank</option>
                  <option value="">Dena Bank</option>
                  <option value="">Indian Bank</option>
                  <option value="">Indian Overseas Bank</option>
                  <option value="">Oriental Bank of Commerce</option>
                  <option value="">Punjab & Sind Bank</option>
                  <option value="">Punjab National Bank</option>
                  <option value="">Syndicate Bank</option>
                  <option value="">UCO Bank</option>
                  <option value="">Union Bank of India</option>
                  <option value="">United Bank of India</option>
                  <option value="">Vijaya Bank</option>
                  <option value="">IDBI Bank</option>
                  <option value="">State Bank of India (SBI)</option>
                  <option value="">Bharatiya Mahila Bank</option>
                </select>
              </div>
            </div>
            <!-- Transaction type row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Transaction Type</label>
              <div class="col-sm-8">
                <select
                  id=""
                  class="form-control"
                >
                  <option value="">Select transaction type</option>
                  <option>Debit</option>
                  <option>Credit</option>
                </select>
              </div>
            </div>
             <!-- Value Date row -->
             <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Value Date</label>
              <div class="col-sm-8">
                <input type="date" class="form-control"/>
              </div>
            </div>
            <!-- Bank Narration row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Bank Narration</label>
              <div class="col-sm-8">
                <textarea type="text" class="form-control"></textarea>
              </div>
            </div>

          </div>

          <div class="col-md-6">
            <!-- Head row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Head</label>
              <div class="col-sm-8">
                <select
                  id=""
                  class="form-control"
                >
                  <option value="">Select Head</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <!-- Sub Head row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Sub Head</label>
              <div class="col-sm-8">
                <select
                  id=""
                  class="form-control"
                >
                  <option value="">Select Subhead</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
             <!-- Payment received from row -->
             <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Payment received from</label>
              <div class="col-sm-8">
                <input type="text" class="form-control"/>
              </div>
            </div>
            <!-- Private Note row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Private Note</label>
              <div class="col-sm-8">
                <input type="text" class="form-control"/>
              </div>
            </div>
            <!-- Request Sent By row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Request Sent By</label>
              <div class="col-sm-8">
                <input type="text" class="form-control">
              </div>
            </div>
            <!-- Payee Type row -->
            <div class="mb-3 row">
              <label for="" class="col-sm-4 col-form-label text-end">Payee/ Payer Type</label>
              <div class="col-sm-8">
                <select name="" id="" class="form-control">
                  <option value="">Select Payee/ Payer Type</option>
                  <option value="">Member</option>
                  <option value="">Store</option>
                  <option value="">Employee</option>
                  <option value="">Vendor</option>
                  <option value="">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTransaction",
  data() {
    return {
      selectedDate: this.getFormattedDate(new Date()),
    };
  },
  computed: {
    minDate() {
      // Calculate the minimum allowed date (two days ago)
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 1);
      return this.getFormattedDate(twoDaysAgo);
    },
    maxDate() {
      // Calculate the maximum allowed date (yesterday)
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return this.getFormattedDate(yesterday);
    },
  },
  methods: {
    getFormattedDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
  },
};
</script>
