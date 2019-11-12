<template>
  <div class="home">
    Hola de nuevo {{user.name}}
  </div>
</template>

<script>
// @ is an alias to /src
import { getModule } from "vuex-module-decorators";
import MainModule from "@/store/modules/mainModule";

const main = getModule(MainModule);

export default {
  name: 'home',
  components: {
  },
    computed:{
      user:()=> main.user,
      }
}

</script>
