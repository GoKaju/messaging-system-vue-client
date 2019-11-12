<template>
  <div class="navigation" v-bind:style="{'background-color':bgcolor}">
    <div class="logo" @click="setHome">
      <!-- <img src="@/assets/logo.png" alt /> -->
      LOGO
    </div>
    <hr />
    <div class="menu-item " @click="setpath('/Chats')">
     <svg t="1573006580715"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2976" width="48" height="48" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path class="icon-svg" d="M480.273415 353.323071c-26.28362 0-47.589878-21.306258-47.589878-47.589878s21.306258-47.589878 47.589878-47.589878 47.589878 21.306258 47.589878 47.589878-21.307282 47.589878-47.589878 47.589878z m-222.086098 0c-26.282596 0-47.589878-21.306258-47.589878-47.589878s21.306258-47.589878 47.589878-47.589878 47.589878 21.306258 47.589878 47.589878-21.306258 47.589878-47.589878 47.589878z m464.466404-47.564295a399.151839 399.151839 0 0 0-4.430916-0.025583c-20.759813 0-41.097 1.647523-60.860113 4.807492-37.747719-103.247502-151.84329-179.303712-288.131303-179.303712-167.45178 0-301.401538 114.813932-301.401538 253.81166 0 71.990614 35.929304 139.478681 98.44001 187.514721a31.729655 31.729655 0 0 1 11.567453 32.355919l-19.032472 81.68644 105.269556-54.822606a31.724539 31.724539 0 0 1 22.09932-2.701528c26.76662 6.462179 54.636365 9.777691 83.058694 9.77769h0.428766a290.275129 290.275129 0 0 0 10.526751 63.312978c-3.638877 0.093121-7.291057 0.140193-10.955517 0.140193-29.30135 0-58.165748-3.003404-86.151125-8.886391l-156.183132 81.33647c-24.046672 12.523221-51.705616-8.933463-45.553499-35.338856l30.207999-129.649826C43.754526 551.032992 4.375657 470.961328 4.375657 385.049656c0-176.399569 164.342975-317.26483 364.854709-317.26483 169.34285 0 312.887127 100.474342 353.423355 237.97395z m90.747817 301.376978c-26.28362 0-47.589878-21.306258-47.589878-47.589878s21.306258-47.589878 47.589878-47.589878 47.589878 21.306258 47.589878 47.589878c0 26.282596-21.306258 47.589878-47.589878 47.589878z m-190.358489 0c-26.28362 0-47.589878-21.306258-47.589878-47.589878s21.306258-47.589878 47.589878-47.589878 47.589878 21.306258 47.589878 47.589878c0 26.282596-21.307282 47.589878-47.589878 47.589878z m237.063207 207.569476a31.726585 31.726585 0 0 1 11.728112-34.288944c53.319369-39.149649 84.33578-96.250134 84.335781-157.417239 0-112.948445-105.7106-206.222805-237.949391-206.222805s-237.94939 93.27436-237.94939 206.222805 105.7106 206.222805 237.94939 206.222805c19.938098 0 39.532365-2.125407 58.480926-6.282077a31.730679 31.730679 0 0 1 20.985964 2.612501l76.435856 38.217416-14.017248-49.064462z m94.844112 100.979856c7.583722 26.543539-20.00359 49.438992-44.693922 37.092803l-131.196041-65.598021c-19.874653 3.641947-40.229237 5.494131-60.838623 5.494131-165.637458 0-301.401538-119.792317-301.401538-269.675976S552.585347 353.323071 718.221782 353.323071s301.401538 119.792317 301.401537 269.674952c0 74.875315-34.238802 144.482649-92.689028 194.632839l28.016077 98.054224z" p-id="2977" fill="#8a8a8a"></path></svg>
    </div>
    <div class="menu-item" @click="setpath('/Contacts')">
     <img src="@/assets/icons/icon_group.svg" alt="">
    </div>
    <div class="spacer">

    </div>
        <div class="menu-item">
     <img src="@/assets/icons/icon_setting.svg" alt="">
    </div>
    <div class="userBtn" title="Salir" @click="logOut">
      <img src="@/assets/user-icon.svg" alt="user-icon" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { getModule } from "vuex-module-decorators";
import MainModule from "@/store/modules/mainModule";

const main = getModule(MainModule);
export default Vue.component("d-navigation-drawer", {
  props: { 
    bgcolor: {
      default: "#FFFFFF"
    }
  },
  data: function() {
    return {
      items: [
        { id: "1", icon: "mdi-clipboard-list-outline", name: "Cuadro Foraneo", active: true, route:'CuadroForaneo' },
        { id: "2", icon: "mdi-worker", name: "Trabajadores", route:'Workers' },
        { id: "3", icon: "mdi-format-list-bulleted", name: "Listas", route:'test3' },
        { id: "4", icon: "mdi-account-supervisor-circle", name: "Supervisores", route:'test3' }
      ]
    };
  },
  methods:{
    setHome() {
      this.$router.push("/Home");
    },
    setpath(path:string) {
      this.$router.push(path);
    },
    logOut(){
      main.logOut()
    }
  }
});
</script>
<style scoped lang="scss">
  .navigation{
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 80px;
    align-items: center;
  }
.logo {
  width: 60px;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  color: $color-primary; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 1000;
}
.logo > img {
  height: 60px;
}

.userBtn,
.userBtn > img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.userBtn > img:hover {
  transform: scale(1.1);
}
.userBtn > img:active {
  transform: scale(0.9);
}
.userBtn {
  margin-bottom: 10px;
}
.menu-item {
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-item.active{
    border-left: 7px solid $color-primary;
    width: calc(100%-8px);
    margin-left:1 px; 
}
.menu-item>img,.menu-item>svg{
    width: 30px;
}
.menu-item.menu-item:active{
     background-color: #f4f5f7;
}
.icon-svg{
  fill: $color-primary;
}
</style>