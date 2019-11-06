<template>
  <div class="navigation scroll">

    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>
    <DFriend/>

  </div>
</template>
<script lang="ts">
import Vue from "vue";

import DFriend from '@/components/DFriend.vue'

export default Vue.component("d-friends-panel", {

  components:{
      DFriend
  },
  data: function() {
    return {
  
    };
  },
  methods:{
    setHome() {
      this.$router.push("/Home");
    },
    setpath(path:string) {
        alert(path)
      this.$router.push(path);
    },
  }
});
</script>
<style scoped>


.navigation {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 80px;
 /* background-color: rgb(7, 71, 166); */
 align-items: center;
 overflow-y: scroll;
}



</style>