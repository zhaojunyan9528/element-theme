/*
 * @Description: vuex状态
 * @version:: 
 * @Author: zhao
 * @Date: 2020-12-23 10:48:08
 * @LastEditors: zhao
 * @LastEditTime: 2020-12-23 11:16:47
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
            // window.localStorage.setItem('count',state.count); //通过监听beforeunload事件来进行数据的localStorage存储，beforeunload事件在页面刷新时进行触发
        }
    }
})
export default store;