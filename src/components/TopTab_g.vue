<template>
    <div class="tabbox">
      <div  v-if="props.currentIndex === 0"  class="btn" :class="{ active: props.currentIndex === 0 }" 
      :style="{backgroundColor:props.bgColor,color: props.fontColor}"   @click="props.handleLeftClick1">
        <img src="@/assets/imgs/gabtn1.png" class="imgleft" alt="">
        <img src="@/assets/imgs/gabtn2.png" class="imgright" alt="">
        {{ leftContent }}
      </div>
  
      <div class="btn" v-if="props.currentIndex === 1" 
        @click="props.handleLeftClick2">
        {{ leftContent }}
      </div>
      
      <div  v-if="props.currentIndex === 1"  class="btn" :class="{ active: props.currentIndex === 1 }" 
      :style="{backgroundColor:props.bgColor,color: props.fontColor}">
        <img src="@/assets/imgs/gabtn1.png" class="imgleft" alt="">
        <img src="@/assets/imgs/gabtn2.png" class="imgright" alt="">
        {{ rightContent }}
      </div>
      <div class="btn" v-if="props.currentIndex === 0" 
        @click="props.handleRightClick1">
        {{ rightContent }}
      </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, watch,defineProps,defineEmits } from 'vue';


  const props = defineProps({
    bgColor:String,
    fontColor:String,
    currentIndex:Number,
    handleLeftClick1:Function,
    handleLeftClick2:Function,
    handleRightClick1:Function,
    handleRightClick2:Function
  });
  
  const bgColor = ref(props.bgColor);
  const fontColor = ref(props.fontColor);
  const leftContent = "自主游玩"
  const rightContent = "匹配游玩"


    

  
  
  onMounted(() => {
    // currentIndex.value = props.currentIndex;
    console.log(props);
  });
  </script>
  
  <style scoped>
  .tabbox{
    width: 598rem;
    display: flex;
    justify-content: space-between;
    gap: 50rem;
  }
  .active {
    border: 3rem solid rgba(236, 196, 135, 1);
    border-radius: 21rem;
    position: relative;
    width: 280rem;
    height: 93rem;
  
    .imgleft {
      position: absolute;
      left: -70rem;
      bottom: -38rem;
      z-index: 99;
    }
  
    .imgright {
      position: absolute;
      left: 169rem;
      bottom: -17rem;
      z-index: 99;
    }
  
  }
  
  
  
  
  .btn {
    width: 276.86rem;
    height: 83.39rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36rem;
    font-weight: 400;
    line-height: 52.13rem;
    cursor: pointer;
  }
  </style>
  