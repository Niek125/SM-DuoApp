import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

import router from "@/router";

Vue.config.productionTip = false;

const DEFAULT_TITLE = 'Meal Share';
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
