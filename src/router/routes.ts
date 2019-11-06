
import P404 from '@/views/P404.vue'
import Login from '@/views/Login.vue'
import SingIn from '@/views/SingIn.vue'
import Home from '@/views/Home.vue'
import Chats from '@/views/Chats.vue'

export default  [
    {
        path: '*',
        component: P404
    },
{
    path: '/',
    component: Login
},
{
    path: '/Singin',
    component: SingIn
},
{
    path: '/Home',
    component: Home,
    // beforeEnter: Auth,
    meta: {
        layout:"home"
    }
},
{
    path: '/Chats',
    component: Chats,
    // beforeEnter: Auth,
    meta: {
        layout:"home"
    }
},
]