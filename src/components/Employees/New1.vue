<template>
  <div class="container f-family mt-5">
    <div class="shadow-sm mb-5 bg-body rounded mx-auto" v-c_width="'90%'">
      <br />
      <form
        action=""
        class="p-5 border border-success"
        @submit.prevent="onSubmit"
        method="post"
      >
        <h2
          class="mt-4 mb-4 text-center fw-bold text-decoration-underline text-color"
        >
          New1 Component
        </h2>
        <br />
        <h4 class="fw-bold text-color text-start">Bank Details :</h4>
        <br />
        <div class="">
          <div class="">
            <div class="mb-3 row">
              <label for="bankname" class="col-sm-4 col-form-label text-end"
                >Bank Name</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="bankname"
                  name="bankname"
                  v-model="post.bankName"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.bankName.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.bankName.required"
                  class="invalid-feedback"
                >
                  Invalid bank name
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="branchname" class="col-sm-4 col-form-label text-end"
                >Branch Name</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="branchname"
                  name="branchname"
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="ac" class="col-sm-4 col-form-label text-end"
                >Account No.</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="ac"
                  name="ac"
                  v-model="post.accountNumber"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.accountNumber.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.accountNumber.required"
                  class="invalid-feedback"
                >
                  Invalid account number
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="ifsc" class="col-sm-4 col-form-label text-end"
                >IFSC Code</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="ifsc"
                  name="ifsc"
                  @blur="$v.ifscCode.$touch()"
                  v-model="post.ifscCode"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.ifscCode.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.ifscCode.required"
                  class="invalid-feedback"
                >
                  IFSC code required
                </div>
                <div
                  v-else-if="isSubmitted && !$v.post.ifscCode.validFormat"
                  class="invalid-feedback"
                >
                  Valid format
                </div>
                <div
                  v-if="isSubmitted && !$v.post.ifscCode.maxLength"
                  class="invalid-feedback"
                >
                  Max length
                </div>
                <div
                  v-if="isSubmitted && !$v.post.ifscCode.minLength"
                  class="invalid-feedback"
                >
                  Min Length
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="passbookPic" class="col-sm-4 col-form-label text-end">
                Passbook Picture
              </label>
              <div class="col-sm-8">
                <input
                  type="file"
                  class="form-control"
                  id="passbookPic"
                  name="passbookPic"
                />
              </div>
            </div>
          </div>
        </div>
        <br />

        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#">
              <router-link to="/new" class="tc">Previous</router-link>
            </a>
          </li>
        </ul>

        <!-- <button type="submit" class="btn btn-danger form-control">
          Add Details
        </button> -->
        <Submit/>
      </form>
    </div>
  </div>
</template>

<script>
import Submit from "./Submit.vue";
import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  name: "EmployeeKyc",
  components : {Submit},
  data() {
    return {
      post: {
        bankName: "",
        accountNumber: "",
        ifscCode: "",
      },
      isSubmitted: false,
    };
  },
  validations: {
    post: {
      bankName: { required },
      accountNumber: {
        required,
        minLength: minLength(11),
        // maxLength: maxLength(20),
        numeric,
      },
      ifscCode: {
        required,
        maxLength: maxLength(11),
        minLength: minLength(11),
        validFormat: (value) => /^[\w]{4}[0]{1}[\w]{6}$/i.test(value),
      },
    },
  },
  methods: {
    onSubmit(e) {
      this.isSubmitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      alert("Data submitted successfully");

      axios
        .post("http://localhost:3000/posts", this.post)
        .then((resp) => {
          console.log("Result", resp.data);
        })
        .catch((err) => {
          console.log("Error", err);
        });

      e.preventDefault();
      this.resetForm();
      this.isSubmitted = false;
    },
    resetForm() {
      this.post = {
        bankName: "",
        accountNumber: "",
        ifscCode: "",
      };
    },
  },
};
</script>

<style scoped>
.text-end {
  text-align: left !important;
}

.bgColor {
  background-color: #ebf3ff;
}

.f-family {
  font-family: Georgia;
}

.tc {
  color: blue !important;
}

@media (max-width: 768px) {
  .col-form-label.text-end {
    text-align: start !important;
  }
}
</style>
