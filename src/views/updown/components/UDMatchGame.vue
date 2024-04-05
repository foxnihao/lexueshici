<template>
  <div class="game-box">
    <div class="top">
      <p v-if="dialogs.length < 1">请您出题：鹅鹅鹅，曲项向天歌</p>
      <p v-else style="position: absolute; right: 540rem;">{{ turnsText }}</p>
      <button class="top-btn" v-if="dialogs.length < 1" style="position: absolute; right: 135rem;">发送</button>
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
      <div @click="handleGetInput" class="btn">发送</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref,watch } from 'vue';
import { useStateStore } from '@/store/index.ts'
const store = useStateStore();
const inputValue = ref("鹅鹅鹅，曲项向天歌。")
const turnsText = ref("出题中")
const poetries = ref([
  { text: "鹅鹅鹅，曲项向天歌。", position: "right", next: "白毛浮绿水，红掌拨清波。", read: false },
  { text: "山不在高，有仙则名。", position: "left", next: "水不在深，有龙则灵。", read: false },
  { text: "明月几时有？把酒问青天。", position: "left", next: "不知天上宫阙，今夕是何年。", read: false },
  { text: "白日依山尽，黄河入海流。", position: "left", next: "欲穷千里目,更上一层楼。", read: false },
  { text: "日照香炉生紫烟，遥看瀑布挂前川。", position: "left", next: "飞流直下三千尺，疑是银河落九天。", read: false },
  { text: "人生若只如初见，何事秋风悲画扇。", position: "left", next: "等闲变却故人心，却道故人心易变。", read: false },
  { text: "清明时节雨纷纷，路上行人欲断魂。", position: 'left', next: '借问酒家何处有，牧童遥指杏花村。', read: false },
  { text: "床前明月光，疑是地上霜。", position: 'left', next: '举头望明月，低头思故乡。', read: false },
  { text: "月落乌啼霜满天，江枫渔火对愁眠。", position: 'left', next: '姑苏城外寒山寺，夜半钟声到客船。', read: false },
  { text: "千里莺啼绿映红，水村山郭酒旗风。", position: 'left', next: '南朝四百八十寺，多少楼台烟雨中。', read: false }
]);

const dialogs = ref([
  // { text: "鹅鹅鹅，曲项向天歌。", position: "right" },
  // { text: "白毛浮绿水，红掌拨清波。", position: "left" },
  // { text: "千里莺啼绿映红，水村山郭酒旗风。", position: "left" },
]);
const chatContainer = ref(null);
const dialogContainer = ref(null);
// 记录对方出题的句子
const lastPoetry = ref()
// 生成一个介于min和max之间的随机整数
const getPoetry = () => {

  while (true) {
    const randomIndex = Math.floor(Math.random() * poetries.value.length);
    if (!poetries.value[randomIndex].read) {
      return poetries.value[randomIndex];
    }
  }
};
// 监听变化，我出题
watch(dialogs.value, (_n, _o) => {
  store.allNums = dialogs.value.filter(item=>item.position==="right").length
  if (_n.length % 4 === 0) {
    const randomPoetry = getPoetry();
    inputValue.value = randomPoetry.text
    randomPoetry.read = true
  }

})

const handleGetInput = async () => {
  if (!dialogs.value || !inputValue.value) return;

  const myInput = inputValue.value.trim();

  if (dialogs.value.length % 4 === 3) { // 答题逻辑
    dialogs.value.push({ text: myInput, position: "right" });
    if (store.checkoutIsTrue(lastPoetry.value.next, myInput)) {
      store.truePoetries3++;
    } else {
      store.addErr(lastPoetry.value.text, myInput, lastPoetry.value.next);
    }
    inputValue.value = "";
  } else if (dialogs.value.length % 4 === 0) { // 出题逻辑
    store.truePoetries3++;
    dialogs.value.push({ text: inputValue.value, position: "right" });
    turnsText.value = "请作答";
    var nextp = null
    poetries.value.forEach(poetry => {
      if (poetry.text === inputValue.value.trim()) {
        poetry.read = true;
        nextp = poetry
      }
    });
    inputValue.value = "";

    await new Promise(resolve => setTimeout(resolve, 3000)); // 等待3秒
    dialogs.value.push({ text: nextp.next, position: "left" });
    turnsText.value = "出题中";

    await new Promise(resolve => setTimeout(resolve, 2000)); // 等待2秒

    turnsText.value = "到你啦";
    lastPoetry.value = getPoetry();
    dialogs.value.push({ text: lastPoetry.value.text, position: "left" });
  }
};


const TIMER_INITIAL = 120; // 初始倒计时时间为3分钟
const TIMER_END_DIALOGS_COUNT = 6;
const TIMER_END_DELAY = 5000; // 5秒延迟

const timer = ref(TIMER_INITIAL);

// 定时器函数，倒计时结束后记录 inputValue 的次数
const startTimer = () => {
  const intervalId = setInterval(() => {
    timer.value--;
    const inputCount = dialogs.value.length;

    // 计时结束
    if (timer.value === 0) {
      clearInterval(intervalId);
      handleTimerEnd(inputCount);
    }

    // 对话次数达到指定值
    if (dialogs.value.length === TIMER_END_DIALOGS_COUNT) {
      clearInterval(intervalId);
      setTimeout(() => {
        timer.value = 0;
        handleTimerEnd(inputCount);
      }, TIMER_END_DELAY);
    }
  }, 1000); // 每秒减少一秒
};

const handleTimerEnd = (inputCount: string | number) => {
  store.changeUpdownState(2);
};


onMounted(() => {
  startTimer(); // 组件挂载时启动定时器
  store.truePoetries3 = 0
  store.allNums = 0
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
