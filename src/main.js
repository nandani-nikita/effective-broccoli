import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import Vuelidate from 'vuelidate'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuelidate);

Vue.directive("c_width",{
  bind(el, binding){
    el.style.width =binding.value;
  }
}),

Vue.config.productionTip = false;

new Vue({
  router : router,
  store,
  render: (h) => h(App),
}).$mount('#app');
