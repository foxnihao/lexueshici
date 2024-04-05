<template>
    <div class="tabbox">

        <router-link to="/" class="back">
            <div class="back-imgbox">
                <img :src="imgb" class="back-img">
            </div>
            <p class="p_b" :style="{color:props.fontColor}">返回</p>
        </router-link>
      <div v-if="props.currentIndex === 0" class="btnimg_box" >
        <img :src="imgl"  class="btnimg" alt="" @click="props.handleLeftClick1">
      </div>
  
      <div class="btn" v-if="props.currentIndex === 1" @click="props.handleLeftClick2"  :style="{ color: props.fontColor }">
        {{ leftContent }}
      </div>
      <div v-if="props.currentIndex === 1" class="btnimg_box">
        <img :src="imgr"  class="btnimg" alt="" @click="props.handleRightClick2" >
      </div>
      <div class="btn" v-if="props.currentIndex === 0" @click="props.handleRightClick1"  :style="{ color: props.fontColor }">
        {{ rightContent }}
      </div>

      <div class="guize_box" :style="{backgroundColor:props.color,color:props.fontColor}">游戏规则</div> 

  
    </div>
  </template>
  
  <script setup lang="ts">

import { onMounted, ref,  defineProps, defineEmits } from 'vue';

  const emits = defineEmits(['update:currentIndex']); // 定义需要向父组件发送的自定义事件
  const props = defineProps(['imgl','imgr','imgb','color','fontColor','currentIndex','handleLeftClick1','handleLeftClick2','handleRightClick2','handleRightClick1']);

  const imgl = ref();
  const imgr = ref();
  const imgb=ref();
  const leftContent = "自主游玩"
  const rightContent = "匹配游玩"


  
  
  onMounted(()=>{
    imgl.value = `../src${props.imgl}`
    imgr.value = `../src${props.imgr}`
    imgb.value = `../src${props.imgb}`
    console.log("top",props)
    console.log(import.meta.url)
  })
  
  
  
  </script>
  
  <style scoped>
  .tabbox {
    width: 100%; /* 使元素宽度等于其父元素宽度 */
  box-sizing: border-box; /* 确保padding和border不会使元素宽度增加 */
  margin: 0; /* 移除外边距 */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50rem;
  }
  .back{
    text-decoration: none;
    position: absolute;
    left: 37rem;
    display: flex;
    flex-direction: row;

    width: 140rem;
    height: 68rem;
  }
  .back-imgbox{
    width: 68rem;
    height: 68rem;
  }
  .back-img{
    max-width: 50rem;
    max-height: 50rem;
  }
  .p_b{
    width: 72rem;
    font-size: 36rem;
font-weight: 400;
  }

  
  .btnimg_box{

    width:300rem;


  }
  .btnimg{
    width: 300rem;
    height: 150rem;
    position: relative;
    bottom: 8rem;
  }
  
  
  .btn {
    width: 300rem;
    /* height: 83.39rem; */

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36rem;
    font-weight: 400;
    line-height: 52.13rem;
    cursor: pointer;
  }

  .guize_box{
    width: 130rem;
    height: 63rem;
    border-radius: 10rem;

    position: absolute;
    left: 1732rem;

    font-size: 24rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  