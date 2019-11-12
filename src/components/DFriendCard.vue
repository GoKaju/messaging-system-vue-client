<template>
    <div class="friend">
        <div class="friend-img">
            <img src="@/assets/user-icon.svg" alt="user-icon" />
        </div>
        <span>Username  </span>
        <span> <small>nombre</small>  </span>
        <div class="btn">
            Aceptar
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.component('d-friend',{
    
})
</script>
<style  lang="scss" scoped>
.friend{
    display: flex;
    width: 150px;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    background-color: white;
}
.friend-img>img{
    width: 120px;
}
.friend-img > img:hover {
  transform: scale(1.1);
}


</style>