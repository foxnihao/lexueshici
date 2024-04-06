<template>
  <div class="content" >
    <img src="../imgs/bg1.png" alt="">
    <div class="btn" @click="handleEnterPersonGame">{{ store.beginState }}</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import {useStateStore}  from '@/store/index.ts'
const store = useStateStore();
onMounted(()=>{
  // store.changeBeginState("开始游玩")
})

const handleEnterPersonGame = ()=>{
  console.log("游玩还是匹配")
  if(store.beginState==="开始游玩"){
    store.changeUpdownState(1);
    console.log("ud",store.updownState)
  }else{
    setTimeout(()=>{
      store.changeBeginState("匹配中...")
    },1000)
    setTimeout(()=>{
      store.changeUpdownState(3);
    },3000)

  }
}


</script>


<style scoped>
.content {
  position: relative;

  img {
    width: 1261rem;
    height: 642rem;
  }

  .btn {
    position: absolute;
    left: 450rem;
    top: 254rem;
    width: 362rem;
    height: 134rem;
    border-radius: 10rem;
    background-color: rgba(247, 238, 235, 1);
    text-align: center;
    font-size: 48rem;
    font-weight: 400;
    line-height: 134rem;
    color: rgba(77, 23, 0, 1);
    cursor: pointer;
  }
  .btn:hover{
      background-color: rgb(229, 215, 211);
    }

}
</style>
