<template>
  <div class="tabbox">
    <div v-if="currentIndex === 0" >
      <img :src="imgl"  class="btnimg" alt="" @click="handleLeftClick1">
    </div>

    <div class="btn" v-if="currentIndex === 1" @click="handleLeftClick2"  :style="{ color: props.fontColor }">
      {{ leftContent }}
    </div>
    <div v-if="currentIndex === 1" >
      <img :src="imgr"  class="btnimg" alt="" @click="handleRightClick2" >
    </div>
    <div class="btn" v-if="currentIndex === 0" @click="handleRightClick1"  :style="{ color: props.fontColor }">
      {{ rightContent }}
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, defineProps, defineEmits } from 'vue';
import { useStateStore } from '@/store/index.ts'
const emits = defineEmits(['update:currentIndex']); // 定义需要向父组件发送的自定义事件
const props = defineProps(['imgl','imgr','fontColor']);
const currentIndex = ref(0);
const imgl = ref();
const imgr = ref();
const leftContent = "自主游玩"
const rightContent = "匹配游玩"
const fontColor = props.fontColor
const store = useStateStore();


onMounted(()=>{
  imgl.value = `../src${props.imgl}`
  imgr.value = `../src${props.imgr}`
  console.log("top",props)
  console.log(import.meta.url)
})

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
.tabbox {
  width: 598rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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


.btnimg{
  width:300rem;
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
