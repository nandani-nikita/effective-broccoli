<template>
  <div class="container f-family">
    <div class="shadow-sm mb-5 bg-body rounded mx-auto" v-c_width="'95%'">
      <form
        @submit.prevent="onSubmit"
        method="post"
        class="p-5 border border-success"
      >
        <h2
          class="mt-3 mb-5 text-center fw-bold text-decoration-underline text-danger textcolor"
        >
          Add Employee
        </h2>
        
        <div class="row">
        <div class="col-md-6">
          <div class="mb-5 row">
            <label for="employee" class="col-sm-4 col-form-label text-end">Employee Type</label>
            <div class="col-sm-8">
              <select class="form-select" id="">
                <option value="">Select</option>
                <option value="male">Regular</option>
                <option value="female">Contract</option>
                <option value="">Wager</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-5 row">
            <label for="userID" class="col-sm-4 col-form-label text-end">User ID</label>
            <div class="col-sm-8">
                  <input type="text" class="form-control">
            </div>
          </div>
        </div>
      </div>

        <div class="row">
          <div class="col-md-6">
            <!-- Full name row -->
            <div class="mb-3 row">
              <label for="eName" class="col-sm-4 col-form-label text-end"
                >Name</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="eName"
                  name="eName"
                  v-model="post.fullname"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.fullname.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.fullname.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>

            <!-- Father's name row -->
            <div class="mb-3 row">
              <label for="fName" class="col-sm-4 col-form-label text-end"
                >Father's Name</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="fName"
                  name="fName"
                  v-model="post.fatherName"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.fatherName.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.fatherName.required"
                  class="invalid-feedback"
                >
                  Invalid father's name
                </div>
              </div>
            </div>

            <!-- Mother's name row -->
            <div class="mb-3 row">
              <label for="mName" class="col-sm-4 col-form-label text-end"
                >Mother's Name</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="mName"
                  name="mName"
                  v-model="post.motherName"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.motherName.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.motherName.required"
                  class="invalid-feedback"
                >
                  Invalid mother's name
                </div>
              </div>
            </div>

            <!-- DOB row -->
            <div class="mb-3 row">
              <label for="birtDate" class="col-sm-4 col-form-label text-end"
                >D.O.B</label
              >
              <div class="col-sm-8">
                <input
                  type="date"
                  class="form-control"
                  id="birtDate"
                  name="birtDate"/>
              </div>
            </div>

            <!-- Gender row -->
            <div class="mb-3 row">
              <label for="eGender" class="col-sm-4 col-form-label text-end"
                >Gender</label
              >
              <div class="col-sm-8">
                <div class="form-group">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="eGender"
                      v-model="post.gender"
                      id="male"
                      value="male"
                    />
                    <label class="form-check-label" for="gender1">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="eGender"
                      v-model="post.gender"
                      id="female"
                      value="female"
                    />
                    <label class="form-check-label" for="gender2">Female</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="eGender"
                      v-model="post.gender"
                      id="others"
                      value="others"
                    />
                    <label class="form-check-label" for="gender3">Others</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile number row -->
            <div class="mb-3 row">
              <label
                for="eMobileNumber"
                class="col-sm-4 col-form-label text-end"
                >Mobile Number</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="eMobileNumber"
                  name="eMobileNumber"
                  rows="2"
                  v-model="post.mobileNumber"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.mobileNumber.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.mobileNumber.required"
                  class="invalid-feedback"
                >
                  Invalid mobile number
                </div>
                <div
                  v-else-if="isSubmitted && !$v.post.mobileNumber.numeric"
                  class="invalid-feedback"
                >
                  Mobile number must be numeric
                </div>
                <div
                  v-else-if="isSubmitted && !$v.post.mobileNumber.minLength || !$v.post.mobileNumber.maxLength"
                  class="invalid-feedback"
                >
                  Mobile number must be 10 digits
                </div>
                <!-- <div
                  v-else-if="isSubmitted && !$v.post.mobileNumber.isTenDigits"
                  class="invalid-feedback"
                >
                  Mobile number must consist of 10 digits
                </div> -->
              </div>
            </div>

            <!-- Alternate mobile row -->
            <div class="mb-3 row">
              <label
                for="eAlternateNumber"
                class="col-sm-4 col-form-label text-end"
                >Alternate Mobile Number</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="eAlternateNumber"
                  name="eAlternateNumber"
                  rows="2"
                  v-model="post.alternateNumber"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.alternateNumber.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.alternateNumber.numeric"
                  class="invalid-feedback"
                >
                  Mobile number must be numeric
                </div>
                <div
                  v-else-if="isSubmitted && !$v.post.alternateNumber.minLength || !$v.post.alternateNumber.maxLength"
                  class="invalid-feedback"
                >
                  Mobile number must be 10 digits
                </div>
              </div>
            </div>

            <!-- Email row -->
            <div class="mb-3 row">
              <label for="eEmail" class="col-sm-4 col-form-label text-end"
                >Email</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="eEmail"
                  name="eEmail"
                  rows="2"
                  v-model="post.email"
                  :class="{ 'is-invalid': isSubmitted && $v.post.email.$error }"
                />
                <div v-if="isSubmitted && $v.post.email.$error" class="invalid-feedback">
                    <span v-if="!$v.post.email.required">Email field is required</span>
                    <span v-if="!$v.post.email.email">Please provide valid email</span>
              </div>
              </div>
            </div>
          </div>

          <!-- 2nd Column -->

          <div class="col-md-6">
          <!-- Profile Photo row -->
            <div class="mb-3 row">
              <label
                for="eProfilePhoto"
                class="col-sm-4 col-form-label text-end"
                >Profile Photo</label
              >
              <div class="col-sm-8">
                <input
                  type="file"
                  class="form-control"
                  id="eProfilePhoto"
                  name="eProfilePhoto"
                  rows="2"
                />
              </div>
            </div>
            <!-- Correspondence Address row -->
            <div class="mb-3 row">
              <label
                for="eCorrespondenceAddress"
                class="col-sm-4 col-form-label text-end"
                >Correspondence Address</label
              >
              <div class="col-sm-8">
                <textarea
                  type="text"
                  class="form-control"
                  id="eCorrespondenceAddress"
                  name="eCorrespondenceAddress"
                ></textarea>
              </div>
            </div>

            <!-- Permanent address row -->
            <div class="mb-3 row">
              <label
                for="ePermanentAddress"
                class="col-sm-4 col-form-label text-end"
                >Permanent Address</label
              >
              <div class="col-sm-8">
                <textarea class="form-control" id="ePermanentAddress" name="ePermanentAddress" rows="2" ></textarea>
              </div>
            </div>

            <!-- Password row -->
            <div class="mb-3 row">
              <label for="ePassword" class="col-sm-4 col-form-label text-end"
                >Password</label
              >
              <div class="col-sm-8">
                <input
                  type="password"
                  class="form-control"
                  id="ePassword"
                  name="ePassword"
                  rows="2"
                  v-model="post.password"
                  :class="{ 'is-invalid': isSubmitted && $v.post.password.$error }"
                />
                <div v-if="isSubmitted && !$v.post.password.required" class="invalid-feedback">Invalid password</div>
                <div v-else-if="isSubmitted && !$v.post.password.minLength" class="invalid-feedback">Password must be at least 8 characters</div>
                <div v-else-if="isSubmitted && !$v.post.password.maxLength" class="invalid-feedback">Password must not exceed 20 characters</div>
                <div v-else-if="isSubmitted && !$v.post.password.complexPassword" class="invalid-feedback">Password must meet complexity criteria</div>
              </div>
            </div>

            <!-- Confirm password row -->
            <div class="mb-3 row">
              <label for="eConfirmPassword" class="col-sm-4 col-form-label text-end"
                >Confirm Password</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="eConfirmPassword" name="eConfirmPassword" rows="2" v-model="post.confirmPassword" 
              :class="{ 'is-invalid': isSubmitted && $v.post.confirmPassword.$error }"/>
              <div v-if="isSubmitted && $v.post.confirmPassword.$error" class="invalid-feedback">
                    <span v-if="!$v.post.confirmPassword.required">Confirm your password</span>
                    <span v-else-if="!$v.post.confirmPassword.sameAsPassword">Passwords should be matched</span>
              </div>
              </div>
            </div>

            <!-- Referred by row -->
            <div class="mb-3 row">
              <label for="eReferredBy" class="col-sm-4 col-form-label text-end"
                >Referred By</label
              >
              <div class="col-sm-8">
                <textarea
                  type="text"
                  class="form-control"
                  id="eReferredBy"
                  name="eReferredBy"
                  rows="2"
                ></textarea>
              </div>
            </div>

            <!-- Remarks row -->
            <div class="mb-3 row">
              <label for="eRemarks" class="col-sm-4 col-form-label text-end"
                >Remarks</label
              >
              <div class="col-sm-8">
                <textarea class="form-control" id="eRemarks" name="eRemarks" rows="2"></textarea>
              </div>
            </div>
          </div>
        </div>

        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#">
              <router-link to="/kyc" class="textcolor" >Next</router-link>
            </a>
          </li>
        </ul>

        <button type="submit" class="from-control btn btn-danger">
          Add Employee
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, email, sameAs, minLength, maxLength, numeric } from "vuelidate/lib/validators";

export default {
  name: "EmployeeAdd",
  data() {
    return {
      post: {
        fullname: "",
        fatherName: "",
        motherName: "",
        dob: "",
        gender: "",
        mobileNumber: "",
        alternateNumber: "",
        email: "",
        profilePicture: "",
        correspondenceAddress: "",
        permanentAddress: "",
        password: "",
        confirmPassword: "",
        referredBy: "",
        remarks: "",
      },
      isSubmitted: false,
    };
  },

  validations: {
    post: {
      fullname: { required },
      fatherName: { required },
      motherName: { required },
      mobileNumber: { 
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
        // isTenDigits(value) {
        //   return helpers.req(value) || /^[0-9]{10}$/.test(value);
        // }, 
      },
      alternateNumber: { 
        numeric, 
        minLength: minLength(10), 
        maxLength: maxLength(10) 
      },
      email: { required, email },
      password: { required,
        minLength: minLength(8),
        maxLength: maxLength(20),
        complexPassword: value => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/.test(value), },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
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
          console.log("Result", resp);
        })
        .catch((err) => {
          console.log("Error", err);
        });
      e.preventDefault();
      this.setEmployeeData(this.post);
      this.resetForm();
      this.isSubmitted = false;
    },

    resetForm() {
      this.post = {
        fullname: "",
        fatherName: "",
        motherName: "",
        dob: "",
        gender: "",
        mobileNumber: "",
        alternateNumber: "",
        email: "",
        profilePicture: "",
        correspondenceAddress: "",
        permanentAddress: "",
        password: "",
        confirmPassword: "",
        referredBy: "",
        remarks: "",
      };
    },
  },
};
</script>

<style scoped>
.textcolor {
  color: rgb(7, 147, 7) !important;
}
</style>
