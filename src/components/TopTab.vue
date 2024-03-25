<template>
  <div class="tabbox">
    <div  v-if="currentIndex === 0"  class="btn" :class="{ active: currentIndex === 0 }" 
    :style="{backgroundColor:bgColor,color: fontColor}"   @click="handleLeftClick1">
      <img src="@/assets/imgs/gabtn1.png" class="imgleft" alt="">
      <img src="@/assets/imgs/gabtn2.png" class="imgright" alt="">
      {{ leftContent }}
    </div>

    <div class="btn" v-if="currentIndex === 1" 
      @click="handleLeftClick2">
      {{ leftContent }}
    </div>
    
    <div  v-if="currentIndex === 1"  class="btn" :class="{ active: currentIndex === 1 }" 
    :style="{backgroundColor:bgColor,color: fontColor}">
      <img src="@/assets/imgs/gabtn1.png" class="imgleft" alt="">
      <img src="@/assets/imgs/gabtn2.png" class="imgright" alt="">
      {{ rightContent }}
    </div>
    <div class="btn" v-if="currentIndex === 0" 
      @click="handleRightClick1">
      {{ rightContent }}
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch,defineProps,defineEmits } from 'vue';
import {useStateStore}  from '@/store/index.ts'
const emits = defineEmits(['update:currentIndex']); // 定义需要向父组件发送的自定义事件
const props = defineProps(['foo', 'bgColor', 'fontColor', 'currentIndex']);
const currentIndex = ref(0);
const bgColor = ref(props.bgColor);
const fontColor = ref(props.fontColor);
const leftContent = "自主游玩"
const rightContent = "匹配游玩"
const store = useStateStore();
watch(currentIndex, (newVal) => {
  console.log("emit")
    emits('update:currentIndex', newVal); // 向父组件发送自定义事件，并传递新的 currentIndex 值
  });
  
const handleLeftClick1 = () => {
  currentIndex.value = 0; // 切换为左边
  store.changeBeginState("开始游玩")
};

const handleLeftClick2 = () => {
  currentIndex.value = 0; // 切换为左边
  store.changeBeginState("开始游玩")
  store.changeFlywordState(0)
};

const handleRightClick1 = () => {
  currentIndex.value = 1; // 切换为右边
  store.changeBeginState("开始匹配")
  store.changeFlywordState(1)
};
const handleRightClick2 = () => {
  currentIndex.value = 1; // 切换为右边
};


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
