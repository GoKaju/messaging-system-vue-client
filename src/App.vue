<template>
  <v-app >
    <componet :is="layout" >
      <router-view  />
    </componet>
  </v-app>
</template>

<script>
  const default_layout = "default";

  export default{
      computed:{
        layout() {
          return (this.$route.meta.layout|| default_layout)+ '-layout';
        }
      }
  }
</script>