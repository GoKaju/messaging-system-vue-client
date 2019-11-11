// import { http } from '@/axios'
// import router from '@/router'

// export default {

//   async signUserIn ({ commit:any }, payload:any) {
//     commit('setLoading', true)
//     commit('setError', null)
//     let rv = null
//     try {
//        rv = await http.post('',JSON.stringify({accion:"login",payload}))
//        router.push('/Home')
//       // console.log(JSON.stringify(rv.data))
//       } catch (e) {
//         commit('setError', { message: e.message})
//      }
//     if (!rv) {
//       commit('setError', { message: 'Error en el servidor' })
//     }
//     commit('setLoading', false)
//   },
// }