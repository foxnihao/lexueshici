<template>
  <div class="content" >
    <img src="@/views/flyword/imgs/bg1.png" alt="">
    <div class="btn" @click="handleEnterPersonGame">{{ store.beginState }}</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
const props = defineProps(['btnContent'])
import {useStateStore}  from '@/store/index.ts'
const store = useStateStore();
onMounted(()=>{
  console.log("ss",store.beginState)
})

const handleEnterPersonGame = ()=>{
  store.changeFlywordState(2);
}


</script>


<style scoped>
.content {
  position: relative;

  img {
    width: 1261rem;
    height: 642rem;
  }

  .btn {
    position: absolute;
    left: 450rem;
    top: 254rem;
    width: 362rem;
    height: 134rem;
    border-radius: 10rem;
    background: rgba(251, 243, 230, 1);
    text-align: center;
    font-size: 48rem;
    font-weight: 400;
    line-height: 134rem;
    color: rgba(77, 23, 0, 1);
  }

}
</style>
