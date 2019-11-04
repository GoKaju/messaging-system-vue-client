import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
Vue.use(Vuex)

const initialState =()=>{
  return{

  }
}
// initial state
const state = initialState()

export default new Vuex.Store({
  state,
  mutations: {
    resetState (state) {
      Object.assign(state, initialState())
    },
  },
  getters:{},
  actions: { ...actions },
  plugins: [createPersistedState()],
})
