<template>
  <div class="gameover-box">
    <p class="over-message">{{ successMessage }}</p>
    <div class="over-img">
      <img src="@/assets/imgs/success.png" alt="">
      <p>共答出</p>
      <p>10句诗词</p>
    </div>
    <div class="over-btn">
      <img src="../imgs/btnleft.png" alt="">
      <img src="../imgs/btnright.png" alt="">

    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const successMessage = ref("恭喜你获得胜利！！")





</script>


<style scoped>
.gameover-box {
  position: relative;
  width: 1261rem;
  height: 642rem;
  border-radius: 10rem;
  background: rgba(251, 243, 230, 1);

  display: flex;
  flex-direction: column;
  align-items: center;

}

.over-message {
  margin-top: 50rem;
  font-size: 48rem;
  font-weight: 400;
  line-height: 69.5rem;
  color: rgba(77, 23, 0, 1);

}

.over-img {
  margin-top: 15rem;

  img {
    width: 137rem;
  }

  p {
    width: 205rem;
    font-size: 48rem;
    font-weight: 400;
    line-height: 69.5rem;
    color: rgba(77, 23, 0, 1);
  }
}

.over-btn {
  display: flex;
  gap: 52rem;
  margin-top: 20rem;
  img {
    width: 256rem;
    /* height: 145rem; */
    opacity: 1;

  }

}
</style>
