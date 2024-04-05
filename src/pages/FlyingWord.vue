<template>
  <div>
    <Background />
    <div class="flyingword">
      <NewTopTab   :bgColor="'rgba(235, 192, 174, 1)'" :font-color="`rgba(77, 23, 0, 1)`"  :current-index="tabIndex" 
      :imgl="`/views/flyword/imgs/topbtnl.png`"  :imgr="`/views/flyword/imgs/topbtnr.png`"  :imgb="'/views/flyword/imgs/back.png'" />
        <div style="height: 30rem;"></div>
      <component :is="nowComponent"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import Background from '@/components/Background.vue';
import NewTopTab   from '@/components/NewTopTab.vue'
import FlyBegin from '@/views/flyword/components/FlyBegin.vue'
import FlyGameOver from '@/views/flyword/components/FlyGameOver.vue';
import FlySelfGame from '@/views/flyword/components/FlySelfGame.vue';
import FlyMatchGame from '@/views/flyword/components/FlyMatchGame.vue';
import FlyCollect from '@/views/flyword/components/FlyCollect.vue';
import {useStateStore}  from '@/store/index.ts'
import { markRaw, onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
const tabIndex = ref(0);

const store = useStateStore();
const {flywordState} =storeToRefs(store)
const nowComponent =  ref(markRaw(FlyBegin));
onMounted(()=>{
  // console.log("sss",store.beginState)
})
watch(flywordState,(newstate,o)=>{
  // 
  console.log("变化",newstate,o)
  switch(newstate) {
    case 0:
      nowComponent.value = markRaw(FlyBegin);
      break;
    case 1:
      nowComponent.value = markRaw(FlySelfGame);
      break;
    case 2:
      nowComponent.value = markRaw(FlyGameOver);
      break;
    case 3:
      nowComponent.value = markRaw(FlyMatchGame);
      break;
    case 4:
    nowComponent.value = markRaw(FlyCollect);
      break;
    default:
      nowComponent.value = markRaw(FlyBegin);
  }
})


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
