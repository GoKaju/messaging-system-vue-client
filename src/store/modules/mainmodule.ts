import store from '@/store'
import router from '@/router'
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


  @Action({ rawError: true })
  async login(username:string,password:string){
    this.setUser({})
    this.setError('')
    this.setLoading(true)
    
    const response=  await http.get('/user/adminPoligran', {
      // payload: {
        //     username,
        //     password
        // }
      }).then(response=>{
        this.setUser(response.data)
        router.push('/Home')
      }).catch(response=>{
        this.setError(response.data.error|| response.statusText)

      })
      
    this.setLoading(false)
      router.push('/Home')
  }


}