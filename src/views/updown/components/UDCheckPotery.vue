<template>
  <div class="ud-content">
    <div class="top">
      <p class="top-p">第 {{ orders[poIndex] }} 题</p>
      <!-- <el-rate max="1" v-model="isCollected" clearable /> -->
      <img :src="isFavorited[poIndex] ? starImg : starNImg" @click="toggleFavorite(poIndex)" alt="favorite"
        class="star" />
    </div>
    <div class="middle">
      <p>上句：{{ poetries[poIndex].givened }}</p>
      <ul>
        <li class="my-answer">你的答案：{{ poetries[poIndex].myanswer }}</li>
        <li class="true-answer">正确答案：{{ poetries[poIndex].trueanswer }}</li>
      </ul>
    </div>
    <div class="bottom">
      <div @click="handleLast">上一题</div>
      <div @click="handleNext" v-if="poIndex !== poetries.length - 1">下一题</div>
      <router-link class="router-link" to="/updown" v-if="poIndex === poetries.length - 1">
        <div @click="handleRouter">结束</div>
      </router-link>

    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useStateStore } from '@/store/index.ts'
import router from '@/router';
const store = useStateStore();
const poetries = store.poetries.slice(2)
onMounted(() => {
  // poetries.value = store.poetries
})
const orders = ref(["一", "二", "三", "四", "五", "六", "七", "八", "九", "十","十一","十二","十三","十四"])
const poIndex = ref(0)
const handleNext = () => {
  if (poIndex.value < poetries.length) {
    poIndex.value++;
  }
}
const handleLast = () => {
  if (poIndex.value) {
    poIndex.value--;
  }
}

const handleRouter = () => {
  // 执行路由跳转到指定路径
  router.push('/updown');
  if (store.beginState !== "开始游玩") {
    store.changeBeginState("开始匹配")
  } else {
    store.changeBeginState("开始游玩")
  }
  store.changeUpdownState(0)
}
const isFavorited = ref(store.poetries.map(() => false));

const toggleFavorite = (index: number) => {
  isFavorited.value[index] = !isFavorited.value[index];
};
const starImg = new URL('../imgs/star.png', import.meta.url).href;
const starNImg = new URL('../imgs/star_n.png', import.meta.url).href;


</script>


<style scoped>
::v-deep .el-icon svg {
  height: 2.5em;
  width: 2.5em;
}

.router-link {
  text-decoration: none;
  /* 移除下划线 */
}

.router-link:hover {
  text-decoration: none;
  /* 移除悬停时的下划线 */
}

.star {
  position: absolute;
  cursor: pointer;
  right: 25.5rem;
  max-height: 42.75rem;
  max-width: 45rem;
}

.ud-content {
  width: 1261rem;
  height: 642rem;
  border-radius: 10rem;
  background: rgba(251, 243, 230, 1);
  display: flex;
  flex-direction: column;
  position: relative;
}

.top {
  width: 1261rem;
  height: 84rem;
  border-bottom: 1rem solid rgba(184, 160, 121, 1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 514rem;

  p {
    margin-left: 595rem;
    font-size: 24rem;
    font-weight: 400;
    color: rgba(107, 0, 0, 1);
  }

}

.middle {
  padding-left: 75rem;
  padding-right: 31rem;
}


ul li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 612rem;
  height: 72rem;
  padding-left: 23rem;
  margin-top: 46rem;
  border-radius: 10rem;
  font-size: 24rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.my-answer {
  background: rgba(196, 45, 45, 1);
}

.true-answer {
  background: rgba(69, 181, 86, 1);
}

.bottom {
  position: absolute;
  bottom: 38rem;
  right: 31rem;
  display: flex;
  gap: 24rem;
  justify-content: flex-end;
  align-items: flex-end;

  div {
    width: 121rem;
    height: 72rem;
    border-radius: 10rem;
    background: rgba(156, 82, 82, 1);
    border: 5rem solid rgba(236, 196, 135, 1);

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
}
</style>
