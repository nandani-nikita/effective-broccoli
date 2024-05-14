import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    loggedInUser: null,
    employeeData : [],
    // currentUrl: "http://localhost:8000"
    currentUrl: "https://nik.saveecoorganic.com"

  },
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    loggedInUser: (state) => state.loggedInUser,
    employeeData: (state) => state.post,
    isSubmitted: (state) => state.isSubmitted,
  },
  mutations: {
    login(state, loginDetails) {
      state.isLoggedIn = true;
      state.loggedInUser = loginDetails;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.loggedInUser = null;
    },
    setEmployeeData(state, data) {
      state.employeeData = data;
    },
  },
  actions: {
    loginUser({ commit }, { username, password }) {
      if (username === "admin" && password === "nikku") {
        const userDetails = {
          userName: username,
          token: "encryptedToken#",
        };
        commit("login", userDetails);
        return true;
      } else {
        return false;
      }
    },
    logoutUser({ commit }) {
      commit("logout");
    },
  },

  modules: {},
});
