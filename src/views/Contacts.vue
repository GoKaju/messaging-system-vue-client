<template>
  <div class="contacs all-100">
    <div class="title-bar">
      <div class="title">Contactos</div>
      <div class="spacer"></div>
      <div class="search">
        <select name id>
          <option value="friends">Amigos</option>
          <option value="friendRequest">Solicitudes</option>
        </select>
      </div>
    </div>
    <div class="friends-panel">
      <DFriendCard  v-for="contact in contacts"  v-bind:key="contact.username"   :username="contact.contact.username" :name="contact.contact.name" :status="contact.state" />
    <!-- <pre>{{contacts}}</pre> -->
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import { getModule } from "vuex-module-decorators";
import MainModule from "@/store/modules/mainModule";

const main = getModule(MainModule);
import DFriendCard from "@/components/DFriendCard";

export default {
  name: "contacs",
  components: {
    DFriendCard
  },
  computed:{
      user:()=> main.user,
      contacts:() => main.user.contacts
    }
};
</script>
<style lang="scss">
select {
  border-radius: 10px;
  border-style: none;
  background-color: #dfdfdf;
  height: 30px;
  width: 200px;
  text-align: center;
  font-size: 18px;
}
.contacs {
  padding: 20px;
}
.title-bar {
  padding: 10px;
  display: flex;
  flex-direction: row;
  width: calc(100%-2px);
}

.title {
  font-size: 24px;
  font-weight: 700;
}
.all-100 {
  height: calc(100%-20px);
}
.friends-panel {
  display: flex;
  flex-direction: row;
}
</style>
