import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import mutations from './mutation'
Vue.use(Vuex)
const state = {
  messages: {
   id:""
  },
  commonData:{}
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})