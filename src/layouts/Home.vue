<template>
  <div class="all-100">
    <d-navigation-drawer />
    <div class="content scroll">
        <slot/>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from "vuex-module-decorators";

import DNavigationDrawer from '@/components/DNavigationDrawer.vue'
import MainModule from "@/store/modules/mainModule";

const main = getModule(MainModule);

export default Vue.extend({
    components:{
       DNavigationDrawer
    },
    computed:{
      user:()=> main.user,
      error:()=> main.error,
      isloading:()=>main.isLoading,
    },
});
</script>

<style scoped>

.content{
  margin-left: 80px;
  width: calc(100%-80px);
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  background-color: #F4F5F7;
}
.home{
  width: 100%;
}
</style>