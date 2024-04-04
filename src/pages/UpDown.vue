<template>
  <div>
    <Background />
    <div class="updown">
      <NewTopTab  :current-index="tabIndex" :font-color="`rgba(107, 0, 0, 1)`"
      :imgl="`/views/updown/imgs/topbtnl.png`"  :imgr="`/views/updown/imgs/topbtnr.png`" />
        <div style="height: 30rem;"></div>
      <component :is="nowComponent"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import Background from '@/components/Background.vue';
import NewTopTab from '@/components/NewTopTab.vue'
import UDBegin from '@/views/updown/components/UDBegin.vue'
import {useStateStore}  from '@/store/index.ts'
import { markRaw, onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import UDSelfGame from "@/views/updown/components/UDSelfGame.vue"
import UDMatchGame from '@/views/updown/components/UDMatchGame.vue'
import UDGameOver from "@/views/updown/components/UDGameOver.vue"
import UDCheckPotery from "@/views/updown/components/UDCheckPotery.vue"
const tabIndex = ref(0);

const store = useStateStore();
const {updownState} =storeToRefs(store)
const nowComponent =  ref(markRaw(UDBegin));
onMounted(()=>{
  // console.log("sss",store.beginState)
})
watch(updownState,(newstate,o)=>{
  // 
  console.log("变化",newstate,o)
  switch(newstate) {
    case 0:
      nowComponent.value = markRaw(UDBegin);
      break;
    case 1:
      nowComponent.value = markRaw(UDSelfGame);
      break;
    case 2:
      nowComponent.value = markRaw(UDGameOver);
      break;
    case 3:
      nowComponent.value = markRaw(UDMatchGame);
      break;
    case 4:
    nowComponent.value = markRaw(UDCheckPotery);
      break;
    default:
      nowComponent.value = markRaw(UDBegin);
  }
})


</script>


<style scoped>
.updown {
  padding-top: 76rem;
  margin-top: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

}
</style>@/store/index.js
