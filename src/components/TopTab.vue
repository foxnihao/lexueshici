<template>
  <div class="tabbox">
    <div class="active">
      <!-- <img src="@/assets/imgs/gabtn1.png" alt="">
      <img src="@/assets/imgs/gabtn2.png" alt=""> -->
      自主游玩</div>
    <!-- <div 
      :style="{ backgroundColor: currentIndex === 0 ? bgColor : '', color: fontColor }" 
      class="btn" 
      @click="handleLeftClick"
    >
      {{ leftContent }}
    </div>
    <div 
      :style="{ backgroundColor: currentIndex === 1 ? bgColor : '', color: fontColor }" 
      class="btn" 
      @click="handleRightClick"
    >
      {{  rightContent  }}
    </div> -->

  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref, defineProps } from 'vue';

// const props = defineProps(['foo', 'bgColor', 'fontColor','currentIndex']);

// const currentIndex = ref(props.currentIndex);
// const bgColor = ref(props.bgColor); 
// const fontColor = ref(props.fontColor); 
// const leftContent = "自主游玩"
// const rightContent ="匹配游玩"

// const handleLeftClick = () => {
//   currentIndex.value = 0; // 切换为左边
// };

// const handleRightClick = () => {
//   currentIndex.value = 1; // 切换为右边
// };


// onMounted(() => {
//   currentIndex.value = props.currentIndex;
//   console.log(props);
// });
</script>

<style scoped>
.active{
  border: 3rem solid rgba(236, 196, 135, 1);
  border-radius: 15rem;

width: 280rem;
height: 93rem;
opacity: 1;

}
/* .tabbox{
  display: flex;
  justify-content: space-between;
  gap: 50rem; /* 两个按钮之间的间距为 50rem */


.btn {
  width: 271.86rem;
  height: 92rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  opacity: 1;
  border-radius: 10rem;
  font-size: 36rem;
  font-weight: 400;
  letter-spacing: 0rem;
  line-height: 52.13rem;
  color: rgba(107, 0, 0, 1);
  cursor: pointer; /* 添加鼠标指针样式，表明可点击 */
} 
</style>
