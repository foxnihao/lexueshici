<template>
  <div class="game-box">
    <div class="top">
      <p v-if="dialogs.length<1">请您出题：鹅鹅鹅，曲项向天歌</p>
      <p v-else  style="position: absolute; right: 540rem;">{{ turnsText }}</p>
      <button class="top-btn" v-if="dialogs.length<1" style="position: absolute; right: 135rem;">发送</button>
      <p style="position: absolute; right: 30rem;">{{ timer }}</p>
    </div>
    <div class="middle" ref="dialogContainer">
      <div class="dialog" v-for="(dialog, index) in dialogs" :key="index">
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
      <div @click="handleGetInput" class="btn">按钮</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStateStore } from '@/store/index.ts'
const store = useStateStore();
const inputValue = ref("鹅鹅鹅，曲项向天歌。")
const turnsText = ref("出题中")
const dialogs = ref([
  // { text: "鹅鹅鹅，曲项向天歌。", position: "right" },
  // { text: "白毛浮绿水，红掌拨清波。", position: "left" },
]);
const dialogContainer = ref(null);

const handleGetInput = () => {
  if (inputValue.value.trim() !== "") {
    dialogs.value.push({ text:inputValue.value,position: "right" });
    inputValue.value = "";
    turnsText.value = "等待对方作答..."
    setTimeout(() => {
      dialogs.value.push( { text: "白毛浮绿水，红掌拨清波。", position: "left" });
      turnsText.value = "等待对方出题..."
    }, 3000); // 3秒后添加随机诗
    setTimeout(()=>{
      turnsText.value = "请作答"
      dialogs.value.push( { text: "床前明月光，疑是地上霜。", position: "left" });
    },5000)
  }
};

const timer = ref(120); // 初始倒计时时间为3分钟
// 定时器函数，倒计时结束后记录 inputValue 的次数
const startTimer = () => {
  const intervalId = setInterval(() => {
    timer.value--;
    const inputCount = dialogs.value.length;
    if (timer.value === 0) {
      clearInterval(intervalId); // 清除定时器
      store.changeUpdownState(2);
      console.log("输入次数：" + inputCount);
    }
    if (dialogs.value.length === 4) {
      timer.value = 0
      clearInterval(intervalId); // 清除定时器
      store.changeUpdownState(2);
    }
  }, 1000); // 每秒减少一秒
};


onMounted(() => {
  startTimer(); // 组件挂载时启动定时器
});


</script>


<style scoped>
/* 隐藏垂直滚动条 */
.chat-container {
  height: 200rem;
  overflow-y: scroll;
  /* 使用 scroll 来显示滚动条 */
  scrollbar-width: none;
  /* 隐藏浏览器默认的滚动条 */
}

.chat-container::-webkit-scrollbar {
  display: none;
  /* 隐藏 WebKit 浏览器（如 Chrome 和 Safari）的滚动条 */
}

.game-box {
  width: 1261rem;
  height: 642rem;
  border-radius: 10rem;
  background: rgba(247, 238, 235, 1);
  display: flex;
  flex-direction: column;
  position: relative;
}

.top {
  width: 1261rem;
  height: 84rem;
  box-sizing: border-box;
  padding-right: 43rem;
  padding-left: 19rem;
  border-bottom: 1rem solid rgba(184, 160, 121, 1);
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  /* gap: 487rem; */

  p {
    font-size: 24rem;
    font-weight: 400;
    color: rgba(77, 23, 0, 1);
    text-align: center;
  }

}

.top-btn {
  width: 102rem;
  height: 52rem;
  font-size: 24rem;
  font-weight: 400;
  color: rgba(77, 23, 0, 1);
  border-radius: 10rem;
  border: none;
  background: rgba(242, 196, 196, 1);
  margin-right: 27rem;

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




.bottom input {

  width: 1080rem;
  height: 49rem;

  border-radius: 10rem;
  background: rgba(255, 255, 255, 1);

  border: none;
  outline: none;
  padding-left: 13rem;

}

.bottom {
  position: absolute;
  top: 570rem;
  left: 35rem;
  display: flex;
  justify-content: space-between;
}

.bottom input {

  width: 1080rem;
  height: 49rem;
  border-radius: 10rem;
  background: rgba(255, 255, 255, 1);

  border: none;
  outline: none;
  padding-left: 13rem;
}

.bottom .btn {
  width: 89rem;
  height: 49rem;
  margin-left: 17rem;
  border-radius: 10rem;
  background: rgba(156, 82, 82, 1);

  font-size: 24rem;
  font-weight: 400;
  letter-spacing: 0rem;
  line-height: 49rem;
  color: rgba(255, 255, 255, 1);
}
</style>
