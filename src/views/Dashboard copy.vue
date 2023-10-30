<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto px-sm-2 px-0 bg-dark min-vh-100">
        <div class="text-center">
          <span class="navbar-logo">
            <img src="../assets/logo.png" width="90em" height="auto" />
          </span>
        </div>
        <!-- <button
          class="navbar-toggler d-lg-none"
          :style="{ height: showMenu ? 'auto' : '100vh' }"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span class="navbar-toggler-icon">
            <img src="" width="60em" height="auto" />
          </span>
          <br />
          <span v-if="!showMenu" class="navbar-toggler-text">Show</span>
          <span v-else class="navbar-toggler-text">Hide</span>
        </button> -->
        <button
          class="navbar-toggler d-lg-none"
          :style="{ maxHeight: showMenu ? 'none' : '100vh', overflow: showMenu ? 'visible' : 'hidden' }"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span class="navbar-toggler-icon">
            <img src="" width="60em" height="auto" />
          </span>
          <br />
          <span v-if="!showMenu" class="navbar-toggler-text">Show</span>
          <span v-else class="navbar-toggler-text">Hide</span>
        </button>
        <div
          class="collapse navbar-collapse d-lg-flex flex-column align-items-start align-items-lg-start px-3 pt-2"
          id="menu"
        >
          <span class="fs-5">Menu</span>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-start"
          >
            <li class="">
              <router-link to="" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i>
                <span class="ms-1">Home</span>
              </router-link>
            </li>
            <li>
              <a
                href="#"
                class="nav-link px-0 align-middle"
                data-bs-toggle="collapse"
                data-bs-target="#submenu1"
              >
                <i class="fs-4 bi-speedometer2"></i>
                <span class="ms-1">Employees</span>
              </a>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li class="w-100 nav-item">
                  <router-link to="/add" class="nav-link align-right px-0">
                    <span class="">Add</span>
                  </router-link>
                </li>
                <li class="w-100 nav-item">
                  <router-link to="/list" class="nav-link align-right px-0">
                    <span class="">List</span>
                  </router-link>
                </li>
                <li class="w-100 nav-item">
                  <router-link to="/edit" class="nav-link align-right px-0">
                    <span class="">Edit</span>
                  </router-link>
                </li>
                <li class="w-100 nav-item">
                  <router-link to="/view-all" class="nav-link px-0">
                    <span class="">View All</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-table"></i>
                <span class="ms-1">Orders</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="nav-link px-0 align-middle"
                data-bs-toggle="collapse"
                data-bs-target="#submenu2"
              >
                <i class="fs-4 bi-bootstrap"></i>
                <span class="ms-1">Bootstrap</span>
              </a>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link px-0">
                    <span class="">Item 1</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="">Item 2</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                class="nav-link px-0 align-middle"
                data-bs-toggle="collapse"
                data-bs-target="#submenu3"
              >
                <i class="fs-4 bi-grid"></i>
                <span class="ms-1">Products</span>
              </a>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link px-0">
                    <span class="">Product 1</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="">Product 2</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="">Product 3</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="">Product 4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1">Customers</span>
              </a>
            </li>
          </ul>
          <hr />
          <div class="dropdown pb-4">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="hugenerd"
                width="30"
                height="30"
                class="rounded-circle"
              />
              <span class="mx-1">{{ loggedInUser.userName }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col py-3 component-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DashBoard",
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {},
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>

li a{
  color: white !important;
}
.nav-item{
  margin-left: 15px;
  text-align: left;
}
.navbar-logo {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.navbar-toggler {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.navbar-toggler-icon {
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}

.navbar-toggler-text {
  display: inline;
  margin-left: 0.5rem;
  color: aliceblue;
  vertical-align: top; 
  line-height: 1; 
}

.fs-5 {
  color: #00FF00;
}

</style>
