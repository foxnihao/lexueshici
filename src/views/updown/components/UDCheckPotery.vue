<template>
  <div class="ud-content">
    <div class="top">
      <p class="top-p">第一题</p>
      <el-rate max="1" v-model="isCollected" clearable />
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
      <div @click="handleNext">下一题</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const poetries = ref([
  { givened: '鹅鹅鹅，曲项向天歌', myanswer: '白毛浮绿水，红掌拨清波', trueanswer: '白毛浮绿水，红掌拨清波' },
  { givened: '鹅鹅鹅，曲项向天歌', myanswer: '白毛浮嫩是，红掌拨清波', trueanswer: '白毛浮绿水，红掌拨清波' }
])
const isCollected = ref(0)
const poIndex = ref(0)
const handleNext = () => {
  console.log("kkk")
  poIndex.value--;
}
const handleLast = () => {
  poIndex.value++;
  console.log("sss")
}
</script>


<style scoped>
::v-deep .el-icon svg {
  height: 2.5em;
  width: 2.5em;
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
