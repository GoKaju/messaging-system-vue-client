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
import { mapGetters } from "vuex";

import DNavigationDrawer from '@/components/DNavigationDrawer.vue'

export default Vue.extend({
    components:{
       DNavigationDrawer
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