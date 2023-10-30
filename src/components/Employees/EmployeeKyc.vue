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
          Employee Kyc
        </h2>
        <h4 class="fw-bold text-color text-end">Kyc Details :</h4>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3 row">
              <label for="pan" class="col-sm-4 col-form-label text-end"
                >PAN</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="pan" name="pan" v-model="post.panNumber"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.panNumber.$error,
                  }"/>
                  <div
                  v-if="isSubmitted && !$v.post.panNumber.required"
                  class="invalid-feedback"
                >
                  Invalid pan number
                </div>
                <div
                  v-else-if="isSubmitted && !$v.post.panNumber.validFormat"
                  class="invalid-feedback"
                >
                  Invalid pan format
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="aadhar" class="col-sm-4 col-form-label text-end"
                >Aadhar No.</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="aadhar"
                  name="aadhar"
                  v-model="post.aadharNumber"
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="voter" class="col-sm-4 col-form-label text-end"
                >Voter ID</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="voter"
                  name="voter"
                  v-model="post.voterID"
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="passport" class="col-sm-4 col-form-label text-end"
                >Passport No.</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="passport"
                  name="passport"
                  v-model="post.passportNumber"
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="dl" class="col-sm-4 col-form-label text-end"
                >DL No.</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="dl" name="dl" 
                v-model="post.dlNumber"/>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="ration" class="col-sm-4 col-form-label text-end"
                >Ration Card No.</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="ration"
                  name="ration"
                  v-model="post.rationCard"
                />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="mb-3 row">
              <label for="pPic" class="col-sm-4 col-form-label text-end"
                >PAN Picture</label
              >
              <div class="col-sm-8">
                <input type="file" class="form-control" id="pPic" name="pPic" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="aPic" class="col-sm-4 col-form-label text-end"
                >Aadhar Picture</label
              >
              <div class="col-sm-8">
                <input type="file" class="form-control" id="aPic" name="aPic" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="vPic" class="col-sm-4 col-form-label text-end"
                >Voter ID Picture</label
              >
              <div class="col-sm-8">
                <input type="file" class="form-control" id="vPic" name="vPic"/>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="pasPic" class="col-sm-4 col-form-label text-end"
                >Passport Picture</label
              >
              <div class="col-sm-8">
                <input type="file" class="form-control" id="pasPic" name="pasPic" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="dlPic" class="col-sm-4 col-form-label text-end"
                >DL Picture</label
              >
              <div class="col-sm-8">
                <input type="file" class="form-control" id="dlPic" name="dlPic" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="rPic" class="col-sm-4 col-form-label text-end"
                >Ration Card Picture</label
              >
              <div class="col-sm-8">
                <input type="file" class="form-control" id="rPic" name="rPic"/>
              </div>
            </div>
          </div>
        </div>
        <br />

        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#">
              <router-link to="/add" class="tc">Previous</router-link>
            </a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#">
              <router-link to="/bankdetails" class="tc">Next</router-link>
            </a>
          </li>
        </ul>
        <button type="submit" class="btn btn-danger form-control">
          Add Employee KYC
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { required } from "vuelidate/lib/validators";
export default {
  name: "EmployeeKyc",
  data() {
    return {
      post: {
        panNumber: "",
        // panPicture: "",
        aadharNumber: "",
        // aadharPicture: "",
        voterID: "",
        // voterIDPicture: "",
        passportNumber: "",
        // passportPicture: "",
        dlNumber: "",
        // dlPicture: "",
        rationCard: "",
        // rationCardPicture: "",
      },
      isSubmitted: false,
    };
  },
  validations: {
    post: {
      panNumber: { required: (value) => !!value,
      validFormat: (value) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) },
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
        panNumber: "",
        // panPicture: "",
        aadharNumber: "",
        // aadharPicture: "",
        voterID: "",
        // voterIDPicture: "",
        passportNumber: "",
        // passportPicture: "",
        dlNumber: "",
        // dlPicture: "",
        rationCard: "",
        // rationCardPicture: "",
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
