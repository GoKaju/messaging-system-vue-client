import store from '@/store'
import router from '@/router'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

import { http } from "@/axios";

@Module({ dynamic: true, store, name: 'main' })
export default class MainModule extends VuexModule {
  user: object = {}
  isLoading: boolean = false
  error: string = ''

  @Mutation
  setUser(user: object) {
    this.user = user
  }
  @Mutation
  setLoading(status: boolean) {
    this.isLoading = status
  }
  @Mutation
  setError(error: string) {
    this.error = error
  }


  @Action({ rawError: true })
  async login(username: string, password: string) {
    this.setError('')
    this.setLoading(true)

    
    let rv = null
    try {
      http.post('/login',JSON.stringify({
        "username": "adminPoligran",
        "password": "123"
      }))
      .then(response => {
        console.log(response.data)
        this.setUser(response.data)
        router.push('/Home')
      })
      .catch(error => console.log(error))
      
          
      // router.push('/Home')
          // console.log(JSON.stringify(rv.data))
          } catch (e) {
            this.setError(e.message)
         }
    this.setLoading(false)
  }


}