<template>
    <div class="friend">
        <div class="friend-img">
            <img src="@/assets/user-icon.svg" alt="user-icon" />
        </div>
        <span>Nombre  </span>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.component('d-friend',{
    
})
</script>
<style scoped>
.friend{
    display: flex;
    height: 70px;
    width: 70px;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    cursor: pointer;
}
.friend-img>img{
    width: 50px;
}
.friend-img > img:hover {
  transform: scale(1.1);
}

</style>