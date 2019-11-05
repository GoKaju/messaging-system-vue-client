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
<style >
/* @font-face {
    font-family: Grinched;
    src: url("assets/GrinchedRegular.otf") format("opentype");
} */
html::-webkit-scrollbar,body::-webkit-scrollbar{
  width: 0px
}
.scroll{
  overflow: auto;
}
.scroll::-webkit-scrollbar-track
{
  border-radius: 10px;
	background-color: transparent;
}

.scroll::-webkit-scrollbar
{
	width: 6px;
	background-color:transparent;
}

.scroll::-webkit-scrollbar-thumb
{
  border-radius: 10px;
	background-color: #97A0AF;
  cursor: pointer;
}

html, body, #app{
  touch-action: none;
  height:100%;
  margin:0;
  display: flex;
  flex-direction: column;

}
.all-100,.v-application--wrap{
height: 100%;
width: 100%;
}
#app {
  font-family:  Helvetica, Arial, sans-serif;
  background-color: #F4F5F7;
  color: #091E42;
  align-items: center;
  justify-content: center;
}
</style>