<template>
  <div>
    <Background />

    <div class="login">
      <div class="tabbox">
        <div   :class="{ 'active': currentIndex === 0 }"  class="btn"
          @click="handleLeftClick">
          {{ leftContent }}
        </div>
        <div   :class="{ 'active': currentIndex === 1 }"  class="btn"
          @click="handleRightClick">
          {{ middleContent }}
        </div>
        <div   :class="{ 'active': currentIndex === 2 }"  class="btn"
          @click="handleThirdClick">
          {{ rightContent }}
        </div>
      </div>
      <!-- <TopTab :current-index="tabIndex"   @tabChange="handleTabChange" :left-content="`学习报告`" :middle-content="`个人信息`" :right-content="`我的收藏`" :bg-color="`rgba(242, 196, 196, 1)`" /> -->

      <LearnModule v-if="currentIndex === 0" />
      <MessageModule v-else />
      <!-- <component :is="currentComponent" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Background from '../components/Background.vue';
// import TopTab from '../components/TopTab.vue';
import LearnModule from '@/views/login/LearnModule.vue';
import MessageModule from '@/views/login/MessageModule.vue';
import { onMounted, ref, defineProps } from 'vue';

const currentIndex = ref(1);

const leftContent = "学习报告";
const rightContent = "我的收藏";
const middleContent = "个人信息";

const handleLeftClick = () => {
  currentIndex.value = 0; // 切换为左边
};

const handleRightClick = () => {
  currentIndex.value = 1; // 切换为右边
};
const handleThirdClick = () => {
  currentIndex.value = 2;
};



</script>
<style scoped>
.login {
  padding-top: 29rem;
  /* background: green; */
  /* height: 800rem; */
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

}
.active{
  background-color: rgba(242, 196, 196, 1);
}
.tabbox {
  display: flex;
  justify-content: space-between;
  gap: 50rem;
  /* 两个按钮之间的间距为 50rem */
}

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
  cursor: pointer;
  /* 添加鼠标指针样式，表明可点击 */
}
</style>