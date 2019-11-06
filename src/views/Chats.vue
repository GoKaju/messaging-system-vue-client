<template>
  <div class="home">
   <DFriendsPanel/>
   <div class="content">
       <div class="img-no-chats">
           <img src="@/assets/undraw_Group_chat_unwm.svg" alt="">
       </div>
           <span> <h1>Escribe un mensaje ahora!!</h1></span>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DFriendsPanel from '@/components/DFriendsPanel'

export default {
  name: 'home',
  components: {
      DFriendsPanel
  }
}
</script>
,<style scoped>
.content{
  margin-left: 80px;
  width: calc(100%-80px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #FFFFFF;
  color: gray;
}
.img-no-chats{
    margin-top: 20px;
    width: 60%;
    display: flex;
    align-items: center;
}
.img-no-chats>img{
    width: 100%;
}
</style>