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
        // console.log(response.data)
        this.setUser(response.data)
        router.push('/Home')
      })
      .catch(error => this.setError(error))
      
          
      // router.push('/Home')
          // console.log(JSON.stringify(rv.data))
          } catch (e) {
            this.setError(e.message)
         }
    this.setLoading(false)
  }

  @Action({ rawError: true })
  async singin(username:string,name:string,password:string){
    this.setLoading(true)

    const response=  await http.get('/user/adminPoligran', {
      // payload: {
      //     username,
      // name
      //     password
      // }
    }).then(response=>{
      this.setUser(response.data)
      router.push('/')
    }).catch(response=>{
      this.setError(response.data.error|| response.statusText)

    })

    this.setLoading(false)
    router.push('/')
  }

  @Action({ rawError: true })
  async logOut(){
    this.setLoading(true)
      this.setUser({})
      router.push('/')
  }



}