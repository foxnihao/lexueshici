<template>
  <div class="game-box">
    <div class="top">
      <p>出题中</p>
      <p>5：15</p>
    </div>
    <div class="middle" ref="dialogContainer">
      <div class="dialog" v-for="(dialog, index) in dialogs" :key="index" >
        <div v-if="dialog.position === 'right'" class="right">
          <img src="../imgs/dialogr.png" class="dialogr" alt="">
          <img src="../imgs/ava1.png" class="avar" alt="">
          <div class="contentr">
            <p class="up">{{ dialog.text }}</p>
          </div>
        </div>
        <div v-else-if="dialog.position === 'left'" class="left">
          <img src="../imgs/ava2.png" class="aval" alt="">
          <img src="../imgs/dialogl.png" class="dialogl" alt="">
          <div class="contentl">
            <p class="up">{{ dialog.text }}</p>
          </div>
        </div>
      </div>
      </div>
      <div class="bottom">
        <input type="text" placeholder="请在此输入诗句" v-model="inputValue">
        <button @click="handleGetInput">按钮</button>
      </div>

    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const inputValue = ref("鹅鹅鹅，曲项向天歌。")
const dialogs = ref([
  {text:"鹅鹅鹅，曲项向天歌。",position:"right"},
  { text: "白毛浮绿水，红掌拨清波。", position: "left" },
  { text: "床前明月光，疑是地上霜。", position: "left" }
]);
const chatContainer = ref(null);
const dialogContainer = ref(null);


const handleGetInput = () => {
  if(inputValue.value!=" "){
  dialogs.value.push({ text: inputValue.value, position: "right" });
  inputValue.value = " "
  }
  
};


onMounted(() => {
  // 滚动到底部
  // scrollToBottom();
});

</script>


<style scoped>
/* 隐藏垂直滚动条 */
.chat-container {
  height: 200px;
  overflow-y: scroll; /* 使用 scroll 来显示滚动条 */
  scrollbar-width: none; /* 隐藏浏览器默认的滚动条 */
}

.chat-container::-webkit-scrollbar {
  display: none; /* 隐藏 WebKit 浏览器（如 Chrome 和 Safari）的滚动条 */
}
.game-box {
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
  box-sizing: border-box;
  padding-right: 43rem;
  border-bottom: 1rem solid rgba(184, 160, 121, 1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 487rem;

  p {
    font-size: 24rem;
    font-weight: 400;
    color: rgba(77, 23, 0, 1);
    text-align: center;
  }

}

.middle {
  padding-left: 35rem;
  padding-right: 35rem;
  padding-top: 30rem;
  overflow-y: auto;
  max-height: 500rem;
}


.dialog {
  /* height: 410rem; */
  /* background: green; */
  position: relative;

  .aval,
  .avar {
    width: 52rem;
    height: 52rem;

  }
}


.dialog .right {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  .dialogr {
    width: 631.64rem;
    margin-right: 65rem;
    /* transform: rotate(-90.57deg); */
  }

  .avar {
    position: absolute;
    bottom: 35rem;
  }

  .contentr {

    width: 491rem;
    height: 70rem;
    position: absolute;
    left: 499rem;
    top: 46rem;

    font-size: 24rem;
    font-weight: 400;
    color: rgba(77, 23, 0, 1);

  }
}

.contentl {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-108%, -30%);
  width: 450rem;
  height: 70rem;
  font-size: 24rem;
  font-weight: 400;
  color: rgba(77, 23, 0, 1);

  .up {
    text-align: center;
  }
}

.up {
  display: flex;
  justify-content: center;
}

.down {
  display: flex;
  justify-content: flex-end;
}

.dialog .left {
  margin-top: -34rem;
  width: 100%;
  position: relative;
  height: 200rem;
  display: flex;
  justify-content: flex-start;

  .dialogl {
    width: 549rem;
    /* height: 190rem; */
    position: absolute;
    top: 20rem;
    left: 50rem;

  }

  .aval {
    vertical-align: bottom;
  }
}




.bottom {
  position: absolute;
  top: 570rem;
  left: 35rem;
  display: flex;
  justify-content: space-between;
}

.bottom input {

  width: 1191rem;
  height: 49rem;

  border-radius: 10rem;
  background: rgba(255, 255, 255, 1);

  border: none;
  outline: none;
  padding-left: 13rem;

}
</style>
