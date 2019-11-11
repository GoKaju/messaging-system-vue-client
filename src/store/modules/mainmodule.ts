import store from '@/store'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

import { http } from "@/axios";

@Module({dynamic: true, store, name: 'main'})
export default class MainModule extends VuexModule {
  user:object={}
  isLoading:boolean= false
  error:string = ''

  @Mutation
  setUser(user:object){
      this.user =user
  }
  @Mutation
  setLoading(status:boolean){
      this.isLoading =status
  }
  @Mutation
  setError(error:string){
      this.error=error
  }


  @Action
  async login(username:string,password:string){
    this.context.commit('setUser', {})
    this.context.commit('setError', '') 
    this.context.commit('setLoading', true)


   const response=  await http.post('/Login', {
        payload: {
            username,
            password
        }
      })
      if(response.status !== 200)
      this.context.commit('setError', response.data.error|| response.statusText)

      this.context.commit('setUser', response.data)

    this.context.commit('setLoading', false)
  }


}