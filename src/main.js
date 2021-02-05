/*
 * @Description: 
 * @version:: 
 * @Author: zhao
 * @Date: 2020-12-22 11:16:09
 * @LastEditors: zhao
 * @LastEditTime: 2020-12-24 16:58:52
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store/index';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

