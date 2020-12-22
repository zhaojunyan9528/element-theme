/*
 * @Description: 
 * @version:: 
 * @Author: zhao
 * @Date: 2020-12-22 11:16:09
 * @LastEditors: zhao
 * @LastEditTime: 2020-12-22 11:43:44
 */
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
