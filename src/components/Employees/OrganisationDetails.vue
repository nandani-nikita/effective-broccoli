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
          class="mt-3 mb-5 text-center fw-bold text-decoration-underline text-color"
        >
          Organisational Details
        </h2>
        <br />
        <!-- <h4 class="fw-bold text-color text-start">Organisational Details :</h4><br> -->
        <div class="row">
          <div class="col-md-6">
            <h4 class="fw-bold text-color text-start">
              Previous Organisation Details :
            </h4>
            <br />
            <div class="mb-3 row">
              <label for="cname" class="col-sm-4 col-form-label text-end"
                >Company Name</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="cname"
                  name="cname"
                  v-model="post.previousComapnyName"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.previousComapnyName.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.previousComapnyName.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="department" class="col-sm-4 col-form-label text-end"
                >Department</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="department"
                  name="department"
                  v-model="post.previousCompanyDepartment"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.previousCompanyDepartment.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.previousCompanyDepartment.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="designation" class="col-sm-4 col-form-label text-end"
                >Designation</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="designation"
                  name="designation"
                  v-model="post.previousCompanyDesignation"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.previousCompanyDesignation.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.previousCompanyDesignation.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="experience" class="col-sm-4 col-form-label text-end"
                >Working Experience</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="experience"
                  name="experience"
                  v-model="post.workingExperience"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.workingExperience.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.workingExperience.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="twe" class="col-sm-4 col-form-label text-end"
                >Total Working Experience</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="twe"
                  name="twe"
                  v-model="post.totalWorkingExperience"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.totalWorkingExperience.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.totalWorkingExperience.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <h4 class="fw-bold text-color text-start">
              Joining Organisation Details :
            </h4>
            <br />
            <div class="mb-3 row">
              <label for="jcname" class="col-sm-4 col-form-label text-end"
                >Company Name</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="jcname" 
                v-model="post.currentCompanyName"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.currentCompanyName.$error,
                  }"/>
                  <div
                  v-if="isSubmitted && !$v.post.currentCompanyName.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="jdepartment" class="col-sm-4 col-form-label text-end"
                >Department</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="jdepartment" 
                v-model="post.currentCompanyDepartment"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.currentCompanyDepartment.$error,
                  }"/>
                  <div
                  v-if="isSubmitted && !$v.post.currentCompanyDepartment.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="jdesignation" class="col-sm-4 col-form-label text-end"
                >Designation</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="jdesignation" 
                v-model="post.currentCompanyDesignation"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.currentCompanyDesignation.$error,
                  }"/>
                  <div
                  v-if="isSubmitted && !$v.post.currentCompanyDesignation.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="doj" class="col-sm-4 col-form-label text-end"
                >Date of Joining</label
              >
              <div class="col-sm-8">
                <input type="date" class="form-control" id="doj" 
                v-model="post.dateOfJoining"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.dateOfJoining.$error,
                  }"/>
                  <div
                  v-if="isSubmitted && !$v.post.dateOfJoining.required"
                  class="invalid-feedback"
                >
                  Invalid name
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#">
              <router-link to="/bankdetails" class="tc">Previous</router-link>
            </a>
          </li>
        </ul>
        <br />

        <button type="submit" class="btn btn-danger form-control">
          Add Employee
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  name: "OrganisatonDetails",
  data() {
    return {
      post: {
        previousComapnyName: "",
        previousCompanyDepartment: "",
        previousCompanyDesignation: "",
        workingExperience: "",
        totalWorkingExperience: "",
        currentCompanyName: "",
        currentCompanyDepartment: "",
        currentCompanyDesignation: "",
        dateOfJoining: "",
      },
      isSubmitted: false,
    };
  },
  validations: {
    post: {
      previousComapnyName: { required },
      previousCompanyDepartment: { required },
      previousCompanyDesignation: { required },
      workingExperience: { required },
      totalWorkingExperience: { required },
      currentCompanyName: { required },
      currentCompanyDepartment: { required },
      currentCompanyDesignation: { required },
      dateOfJoining: { required },
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
      this.resetForm();
      this.isSubmitted = false;
    },

    resetForm() {
      this.post = {
        previousComapnyName: "",
        previousCompanyDepartment: "",
        previousCompanyDesignation: "",
        workingExperience: "",
        totalWorkingExperience: "",
        currentCompanyName: "",
        currentCompanyDepartment: "",
        currentCompanyDesignation: "",
        dateOfJoining: "",
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
