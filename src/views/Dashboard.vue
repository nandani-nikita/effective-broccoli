<template>
  <div class="dashboard">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/logo.png" alt="Logo" class="logo" />
        </router-link>
        <button class="navbar-toggler" type="button" @click="toggleMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': showMenu }">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li> -->


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" @click="toggleBankDropdown">
                Bank Accounts
              </a>
              <div class="dropdown-menu" :class="{ 'show': showBankDropdown }">
                <a class="dropdown-item" @click="navigateToAddBank">Add Bank</a>
                <a class="dropdown-item"  @click="navigateToAllBanks">All Accounts</a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" @click="toggleTrxDropdown">
                 Transactions
              </a>
              <div class="dropdown-menu" :class="{ 'show': showTrxDropdown }">
                <a class="dropdown-item" @click="navigateToAddTrx">Add Transaction</a>
                <a class="dropdown-item"  @click="navigateToAllTrx">All Transactions</a>
              </div>
            </li>





          </ul>
          <!-- User Dropdown -->
          <div class="dropdown">
            <button class="nav-link dropdown-toggle" type="button" id="navbarDropdown" aria-expanded="false"
              @click="toggleDropdown">
              <span id="logged-in-user">{{ loggedInUser.userName }}</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" :class="{ 'show': showDropdown }">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content Area -->
    <div class="container-fluid">
      <router-view></router-view>
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
      showDropdown: false,
      showBankDropdown: false,
      showTrxDropdown: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleBankDropdown() {
      this.showBankDropdown = !this.showBankDropdown;
    },
    toggleTrxDropdown() {
      this.showTrxDropdown = !this.showTrxDropdown;
    },
    navigateToAddBank() {
      if (this.$route.path !== '/add-bank') {
        this.$router.push({ name: 'AddBank' });
      }
      this.toggleBankDropdown();
    },
    navigateToAllBanks() {
      if (this.$route.path !== '/all-bank') {
        this.$router.push({ name: 'AllBank' });
      }
      this.toggleBankDropdown();
    },
    navigateToAddTrx() {
      if (this.$route.path !== '/add-trx') {
        this.$router.push({ name: 'AddTransaction' });
      }
      this.toggleTrxDropdown();
    },
    navigateToAllTrx() {
      if (this.$route.path !== '/all-bank') {
        this.$router.push({ name: 'AllBank' });
      }
      this.toggleTrxDropdown();
    }
  },
};
</script>
<!-- 
<style scoped>
.dashboard {
  height: 100vh;
}

.navbar-toggler {
  border: none;
}

.logo {
  max-width: 100px;
  height: auto;
}

.navbar-brand {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.navbar-nav {
  margin-left: auto;
}

.dropdown-menu {
  min-width: 120px;
  left: auto;
  right: 0;
}

.dropdown-menu.show {
  display: block;
}


#logged-in-user {
  color: #ffffff;
}


.navbar {
  background-color: #343a40;
}

.navbar-nav .nav-link,
.navbar-nav .dropdown-toggle,
.navbar-nav .dropdown-toggle.nav-link {
  color: #ffffff;
}

.dropdown-menu .dropdown-item {
  color: #343a40; /* Background color for dropdown items */
}

.dropdown-menu .dropdown-divider {
  background-color: #343a40; /* Background color for dropdown dividers */
}

.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus {
  background-color: #6c757d; /* Background color for hover/focus state */
  color: #ffffff; /* Font color for hover/focus state */
}
</style> -->

<!-- 
<style scoped>
.dashboard {
  height: 100vh;
}

.navbar-toggler {
  border: none;
}

.logo {
  max-width: 100px;
  height: auto;
}

.navbar-brand {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.navbar-nav {
  margin-left: auto;
}

.dropdown-menu {
  min-width: 120px;
  left: auto;
  right: 0;
}

.dropdown-menu.show {
  display: block;
}

.navbar {
  background-color: #6c757d;
  /* Background color for navbar */
}

.navbar-nav .nav-link,
.navbar-nav .dropdown-toggle,
.navbar-nav .dropdown-toggle.nav-link,
#logged-in-user {
  color: #ffffff;
  /* Font color for navbar links and username */
}

.dropdown-menu .dropdown-item {
  color: #6c757d;
  /* Font color for dropdown items */
}

.dropdown-menu .dropdown-divider {
  background-color: #6c757d;
  /* Background color for dropdown dividers */
}

.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus {
  background-color: #495057;
  /* Darker shade for hover/focus state */
  color: #ffffff;
  /* Font color for hover/focus state */
}
</style> -->
<style scoped>
.dashboard {
  height: 100vh;
}

.navbar-toggler {
  border: none;
}

.logo {
  max-width: 100px;
  height: auto;
}

.navbar-brand {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.navbar-nav {
  margin-left: auto;
}

.dropdown-menu {
  min-width: 120px;
  left: auto;
  right: 0;
}

.dropdown-menu.show {
  display: block;
}

.navbar {
  background-color: #6c757d;
  /* Background color for navbar */
}

.navbar-nav .nav-link,
.navbar-nav .dropdown-toggle,
.navbar-nav .dropdown-toggle.nav-link,
#logged-in-user {
  color: #ffffff;
  /* Font color for navbar links and username */
}

.dropdown-menu .dropdown-item {
  color: #6c757d;
  /* Font color for dropdown items */
}

.dropdown-menu .dropdown-divider {
  background-color: #6c757d;
  /* Background color for dropdown dividers */
}

.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus {
  background-color: #495057;
  /* Darker shade for hover/focus state */
  color: #ffffff;
  /* Font color for hover/focus state */
}
</style>