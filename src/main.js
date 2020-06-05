import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'overlayscrollbars/css/OverlayScrollbars.min.css'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'overlayscrollbars/js/jquery.overlayScrollbars.min.js';
import 'admin-lte/dist/js/adminlte.min.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
