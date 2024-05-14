import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { requiresAuth: true },
    children:[
      {
        path: "/add",
        name: "EmployeeAdd",
        component: () => import("../components/Employees/EmployeeAdd.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/view",
        name: "EmployeeView",
        component: () => import("../components/Employees/EmployeeView.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/list",
        name: "EmployeeList",
        component: () => import("../components/Employees/EmployeeList.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/update/:id",
        name: "EmployeeUpdate",
        component: () => import("../components/Employees/EmployeeUpdate.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/kyc",
        name: "EmployeeKyc",
        component: () => import("../components/Employees/EmployeeKyc.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/bankdetails",
        name: "EmployeeBank",
        component: () => import("../components/Employees/EmployeeBank.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/orgdetails",
        name: "OrganisationDetails",
        component: () => import("../components/Employees/OrganisationDetails.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/addsupplier",
        name: "SupplierAdd",
        component: () => import("../components/Supplier/SupplierAdd.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "/supplierbankdetails",
        name: "SupplierBankDetails",
        component: () => import("../components/Supplier/SupplierBankDetails.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/supplierlist",
        name: "SupplierList",
        component: () => import("../components/Supplier/SupplierList.vue"),
        meta: { requiresAuth: true },
      },
     
      {
        path: "/EmployeeSalaryDetails",
        name: "EmployeeSalaryDetails",
        component: () => import("../components/Employees/EmployeeSalaryDetails.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/New",
        name: "New",
        component: () => import("../components/Employees/New.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/New1",
        name: "New1",
        component: () => import("../components/Employees/New1.vue"),
        meta: { requiresAuth: true },
      },

      {
        path: '/add-bank/:id?',
        name: 'AddBank',
        component: () => import("../components/Banks/AddBank.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: '/all-bank',
        name: 'AllBank',
        component: () => import("../components/Banks/AllBank.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: '/add-trx/:id?',
        name: 'AddTransaction',
        component: () => import("../components/DailyTransaction/AddTransaction.vue"),
        meta: { requiresAuth: true },
      },
    ]
  },
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if route requires authentication
    if (!store.state.isLoggedIn) {
      // User is not authenticated
      if (to.name !== "login") {
        // Redirect to login only if not already on the login page
        next({ name: "login" });
      } else {
        // Allow access to the login page
        next();
      }
    } else {
      // User is authenticated, proceed to the route
      next();
    }
  } else {
    // Route does not require authentication, proceed
    next();
  }
});

export default router;
