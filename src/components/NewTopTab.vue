<template>
  <div class="tabbox">

    <router-link v-if="store.flywordState === 0||store.updownState===0"  class="router-link" to="/">
      <div class="left" :style="{ color: props.fontColor }">
        < 返回 </div>
    </router-link>
    <div v-else class="left" :style="{ color: props.fontColor }" @click="handleReutrn">
      < 返回 </div>

    <div class="middle">
      <div v-if="currentIndex === 0">
        <img :src="imgl" class="btnimg" alt="" @click="handleLeftClick1">
      </div>

      <div class="btn" v-if="currentIndex === 1" @click="handleLeftClick2" :style="{ color: props.fontColor }">
        {{ leftContent }}
      </div>
      <div v-if="currentIndex === 1">
        <img :src="imgr" class="btnimg" alt="" @click="handleRightClick2">
      </div>
      <div class="btn" v-if="currentIndex === 0" @click="handleRightClick1" :style="{ color: props.fontColor }">
        {{ rightContent }}
      </div>
    </div>
    <div class="right" :style="{ color: props.fontColor }">游戏规则</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, defineProps, defineEmits } from 'vue';
import { useStateStore } from '@/store/index.ts'
const emits = defineEmits(['update:currentIndex']); // 定义需要向父组件发送的自定义事件
const props = defineProps(['imgl', 'imgr', 'fontColor']);
const currentIndex = ref(0);
const imgl = ref();
const imgr = ref();
const leftContent = "自主游玩"
const rightContent = "匹配游玩"
const fontColor = props.fontColor
const store = useStateStore();

onMounted(() => {
  imgl.value = `../src${props.imgl}`
  imgr.value = `../src${props.imgr}`
  console.log("top", props)
  console.log(import.meta.url)
})

const handleReutrn = () => {
  // if (store.flywordState === 1) {
  //   console.log("sssssssssssssss")
  //   store.handleReturn(0, 1);
  // } else ()

  switch (store.flywordState) {
    case 0:
      store.handleReturn(0, 1)
      break
    case 1:
      store.handleReturn(0, 1);
      break;
    case 2:
      store.handleReturn(1, 1);
      break;
    case 3:
      store.handleReturn(0, 1);
      break;
    case 4:
      store.handleReturn(2, 1);
      break;
  }

  switch (store.updownState) {
    case 0:
      store.handleReturn(0, 3)
      break
    case 1:
      store.handleReturn(0, 3);
      break;
    case 2:
      store.handleReturn(0, 3);
      break;
    case 3:
      store.handleReturn(0, 3);
      break;
    case 4:
      store.handleReturn(2, 3);
      break;
  }



}
const handleLeftClick1 = () => {
  currentIndex.value = 0; // 切换为左边
  store.changeBeginState("开始游玩")
  store.changeFlywordState(0)
  store.changeUpdownState(0)
};

const handleLeftClick2 = () => {
  currentIndex.value = 0; // 切换为左边
  store.changeBeginState("开始游玩")
  store.changeFlywordState(0)
  store.changeUpdownState(0)
};

const handleRightClick1 = () => {
  currentIndex.value = 1; // 切换为右边
  store.changeBeginState("开始匹配")
  store.changeFlywordState(0)
  store.changeUpdownState(0)
};
const handleRightClick2 = () => {
  currentIndex.value = 1; // 切换为右边
  store.changeBeginState("开始匹配")
  store.changeFlywordState(0)
  store.changeUpdownState(0)
};



</script>

<style scoped>
.router-link {
  text-decoration: none; /* 移除下划线 */
}

.router-link:hover {
  text-decoration: none; /* 移除悬停时的下划线 */
}

.tabbox {
  width: 1750rem;
  padding-left: 64rem;
  padding-right: 58rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50rem;
}

.left {
  height: 53rem;
  font-size: 36rem;
  font-weight: 400;
  line-height: 52.13rem;
  color: rgba(77, 23, 0, 1);
}

.middle {
  display: flex;
  gap: 110rem;
}

.right {
  font-size: 24rem;
  font-weight: 400;
  letter-spacing: 0rem;
  line-height: 63rem;
  color: rgba(107, 0, 0, 1);
  left: 1732rem;
  top: 247rem;
  width: 130rem;
  height: 63rem;
  opacity: 1;
  border-radius: 10rem;
  background: rgba(242, 196, 196, 1);


}

.btnimg {
  width: 300rem;
}

.btn {
  width: 276.86rem;
  /* height: 83.39rem; */
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
