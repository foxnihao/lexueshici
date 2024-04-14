<template>
    <div class="gameover-box">
      <p class="over-message">{{ successMessage }}</p>
      <div class="over-img">
        <img src="@/assets/imgs/success.png" alt="">
        <p>答对2题</p>
        <p>正确率100%</p>
      </div>
      <div class="over-btn">
        <img src="../imgs/btn_again.png"  @click="handle_btn_again">
        <img src="../imgs/btn_lookup.png" @click="handle_btn_lookup">
  
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import {   ref } from 'vue';
  import {useGameStore} from '../../../store/game2'
  const successMessage = ref("恭喜你完成答题！！")
  const store=useGameStore();
  const handle_btn_again=()=>{
    store.changeGameState(0)
  }
  const handle_btn_lookup=()=>{
    store.q_id=0;
    store.changeGameState(3)
  }

  
  
  
  
  
  </script>
  
  
  <style scoped>
  .gameover-box {
    position: relative;
    width: 1261rem;
    height: 642rem;
    border-radius: 10rem;
    background: rgba(240, 247, 244, 1);
  
    display: flex;
    flex-direction: column;
    align-items: center;
  
  }
  
  .over-message {
    margin-top: 50rem;
    font-size: 48rem;
    font-weight: 400;
    line-height: 69.5rem;
    color: rgba(0, 66, 14, 1);
  
  }
  
  .over-img {
    margin-top: 15rem;
  
    img {
      width: 137rem;
    }
  
    p {
      width: 400rem;
      font-size: 48rem;
      font-weight: 400;
      line-height: 69.5rem;
      color: rgba(0, 66, 14, 1);
    }
  }
  
  .over-btn {
    display: flex;
    gap: 52rem;
    margin-top: 20rem;
    img {
      width: 256rem;
      /* height: 145rem; */
      opacity: 1;
      cursor: pointer;
    }
  
  }
  </style>
  