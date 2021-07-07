import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import wysiwyg from 'vue-wysiwyg';
import VueAzureUploader from 'vue-azure-blob-upload';



Vue.use(VueAzureUploader);
Vue.use(wysiwyg, {}); // config is optional. more below
Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

