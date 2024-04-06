<template>
  <div class="message-box">
    <div class="avator"> <img src="@/assets/imgs/ava.png" alt=""> </div>
    <div class="nickname box">
      <span class="label">昵称</span>
      <span class="label">|</span>
      <input type="text" class="input" placeholder="某某某" v-model="store.name"> </div>
      <div class="gender box">
        <span class="label">性别</span>
        <span class="label">|</span>
        <input type="text" class="input" placeholder="女" v-model="store.gender">
      </div>
      <div class="birth box">
        <span class="label">生日</span>
        <span class="label">|</span>
        <input type="text" class="input" placeholder="1900年1月1日" v-model="store.birthdate ">
      </div>
      <div class="phone box">
        <span class="label">电话</span>
        <span class="label">|</span>
        <input type="text" class="input" placeholder="12345678901" v-model="store.phone">
      </div>
    </div>
</template>

<script setup lang="ts">
import { useStateStore } from '@/store'
import { onMounted, ref } from 'vue'
const store = useStateStore();

</script>

<style scoped>
/* 
.save {
    font-weight: 400;
    font-size: 24rem;
    background: rgba(242, 196, 196, 1);
    width: 124rem;
    height: 50rem;
    border-radius: 10rem;
    text-align: center;
    line-height: 50rem;
    color: rgba(107,0 green,0,1 blue);

  } */
.message-box {
  margin-top: 51rem;

  .avator {
    img {
      width: 164rem;
      height: 164rem;
    }
  }

  .box {
    margin-top: 39rem;
    width: 470rem;
    height: 72rem;
    opacity: 1;
    border-radius: 10rem;
    border: 1rem solid rgba(107, 0, 0, 1);
    margin-bottom: 25.67rem;
    display: flex;
    align-items: center;

    .label {
      flex: 0 0 auto;
      /* 不要拉伸 */
      margin-right: 15rem;
      margin-left: 22rem;
      /* 右侧留出一定的间距 */
      /** 文本1 */
      font-size: 24rem;
      font-weight: 400;
      letter-spacing: 0rem;
      line-height: 34.75rem;
      color: rgba(107, 0, 0, 1);
    }

    .input {
      flex: 1;
      /* 占据剩余空间 */
      padding: 5rem;
      padding-left: 40rem;
      height: 40rem;
      /* 输入框内边距 */
      border: none;
      /* 边框样式 */
      border-radius: 4rem;
      /* 边框圆角 */
      outline: none;
      font-size: 24rem;
      font-weight: 400;
      letter-spacing: 0rem;
      line-height: 34.75rem;
      color: rgba(107, 0, 0, 1);
      background-color: transparent;
      /* 去掉默认的外边框 */
    }
  }
}
</style>