import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}

const mutations = {
  SETVALUE(state,value){
    state.portrait=value
  },
  GETUSERID(state,value){
    state.userId=value
  },
}

const state = {
  isLoad:false,
  userId:0,
  content:'',
  portrait:'',
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
})