<template>
  <div class="gameover-box">
    <p class="over-message">{{ store.truePoetries3/store.allNums*100 > 60 ? successMessage : '很遗憾比拼失败！！' }}
</p>
    <div class="over-img">
      <img src="@/assets/imgs/success.png" alt="">
      <p>答对{{store.truePoetries3}}题</p>
      <p>正确率{{ store.allNums?Number((store.truePoetries3/store.allNums*100).toFixed(0))+"%":0+"%" }}</p>
    </div>
    <div class="over-btn">
      <img src="../imgs/btnleft.png" alt="" @click="handleAgain">
      <img src="../imgs/btnright.png" @click="handleCheck" alt="">

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStateStore } from '@/store';
const store = useStateStore()
onMounted(()=>{
  console.log("sff")
  console.log(store.allNums,store.truePoetries3,store.poetries)
})
const successMessage = ref("恭喜你获得胜利！！")
const handleAgain = () => {
  if(store.beginState==="匹配中..."){
    store.changeBeginState("开始匹配")
    store.changeUpdownState(0)
  }else{
    store.changeBeginState("开始游玩")
    store.changeUpdownState(0)
  }
  
}

const handleCheck = () => {
  store.changeUpdownState(4)
}

</script>


<style scoped>
.gameover-box {
  position: relative;
  width: 1261rem;
  height: 642rem;
  border-radius: 10rem;
  background: rgba(247, 238, 235, 1);

  display: flex;
  flex-direction: column;
  align-items: center;

}

.over-message {
  margin-top: 50rem;
  font-size: 48rem;
  font-weight: 400;
  line-height: 69.5rem;
  color: rgba(107, 0, 0, 1);

}

.over-img {
  margin-top: 15rem;

  img {
    width: 137rem;
  }

  p {
    /* width: rem; */
    font-size: 48rem;
    font-weight: 400;
    line-height: 69.5rem;
    color: rgba(107, 0, 0, 1);
  }
}

.over-btn {
  display: flex;
  gap: 52rem;
  margin-top: 20rem;

  img {
    width: 260rem;
    /* height: 145rem; */
    opacity: 1;

  }

}
</style>
