<template>
    <div class="content" >
      <img src="@/views/game4/imgs/bg4.png" alt="">
      <div class="btn" @click="handleEnterPersonGame">{{ btn_content }}</div>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, watch } from 'vue';

  import {useGameStore} from '../../../store/game4'
  const store = useGameStore();

  const btn_content = ref('开始游玩')
  watch(() => store.beginState, (newValue) => {
  btn_content.value = newValue;
  console.log(store.beginState)
});
  
  const handleEnterPersonGame = ()=>{
    if(store.beginState==="开始匹配"){
      btn_content.value='匹配中...'
      setTimeout(() => {
      store.changeGameState(1);
    store.init_Store();
  }, 2000);
    }else{
      store.changeGameState(1);
    store.init_Store();
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
      background-color: rgba(235, 244, 247, 1);
      text-align: center;
      font-size: 48rem;
      font-weight: 400;
      line-height: 134rem;
      color:  rgba(0, 15, 66, 1);
      transition: background-color 0.3s;
      cursor: pointer;
    }

    .btn:hover{
      background-color: rgb(220, 234, 239);
    }
  
  }
  </style>
  