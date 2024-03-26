<template>
  <div>
    <Background />
    <div class="flyingword">
      <TopTab :bg-color="'rgba(130, 65, 65, 1)'" :font-color="'white'" :current-index="tabIndex"
        @update:currentIndex="handleCurrentIndexUpdate" />
        <div style="height: 30rem;"></div>
      <component :is="nowComponent"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import Background from '@/components/Background.vue';
import TopTab from '@/components/TopTab.vue'
import FlyBegin from '@/views/flyword/components/FlyBegin.vue'
import FlyGameOver from '@/views/flyword/components/FlyGameOver.vue';
import FlySelfGame from '@/views/flyword/components/FlySelfGame.vue';
import {useStateStore}  from '@/store/index.ts'
import { markRaw, onMounted, ref, watch } from 'vue';
const tabIndex = ref(0);
const btnContent = ref("开始游玩");
const store = useStateStore();
const nowComponent =  ref(markRaw(FlyGameOver));
onMounted(()=>{
  // console.log("sss",store.beginState)
})
watch(()=>store.flywordState,(newstate)=>{
  // 
  switch(newstate){
    case 0:
      nowComponent.value = FlyBegin
      break;
    case 1:
      nowComponent.value = FlySelfGame;
      break;
    case 2:
      nowComponent.value = FlyGameOver;
      break;
    default:
      nowComponent.value = FlyBegin;
  }
})

const handleCurrentIndexUpdate = (newIndex: number) => {
  console.log("变化",newIndex)
  
  if (newIndex === 0) {
    btnContent.value = "开始游玩"
  } else {
    btnContent.value = "开始匹配"
  }
}
</script>


<style scoped>
.flyingword {
  padding-top: 76rem;
  margin-top: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

}
</style>@/store/index.js
