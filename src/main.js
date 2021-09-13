import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import wysiwyg from 'vue-wysiwyg';
import VueAzureUploader from 'vue-azure-blob-upload';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';


Vue.use(VueAzureUploader);
Vue.use(wysiwyg, {}); // config is optional. more below
Vue.config.productionTip = false

Vue.use(VuePlyr, {
  plyr: {}
})



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

