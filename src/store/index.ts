// import Vue from 'vue'
// import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
// import actions from './actions'
// Vue.use(Vuex)

// const initialState =()=>{
//   return{
//     user:{},
//     error:'',
//     isLoading:false,
//     contacts:[],
//     chats:[]
//   }
// }
// // initial state
// const state = initialState()

// export default new Vuex.Store({
//   state,
//   mutations: {
//     resetState (state) {
//       Object.assign(state, initialState())
//     },
//   },
//   getters:{
//     getUser(state){return state.user},
//     getError(state){return state.error},
//     isLoading(state){return state.isLoading},
//     getContacts(state){return state.contacts},
//     getChats(state){return state.chats
//     },
//   },
//   actions: { ...actions },
//   plugins: [createPersistedState()],
// })

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  /*
  Ideally if all your modules are dynamic
  then your store is registered initially
  as a completely empty object
  */
})
