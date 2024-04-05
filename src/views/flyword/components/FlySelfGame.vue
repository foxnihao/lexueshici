<template>
  <div class="game-box">
    <div class="top">
      <p class="p1">本文抽到的字为 </p>
      <img src="../imgs/font.png" alt="">
      <p class="p2">{{ turnsText }}</p>
      <p>{{ timer }}</p> <!-- 将倒计时显示在页面上 -->
    </div>
    <div class="middle">
      <div class="dialog" v-for="(dialog, index) in dialogs" :key="index">
        <div v-if="dialog.position === 'right'" class="right">
          <img src="../imgs/dialogr.png" class="dialogr" alt="">
          <img src="../imgs/ava1.png" class="avar" alt="">
          <div class="contentr">
            <p class="up">{{ dialog.text }}</p>
            <p class="down">{{ dialog.origin }}</p>
          </div>
        </div>
        <div v-else-if="dialog.position === 'left'" class="left">
          <img src="../imgs/ava2.png" class="aval" alt="">
          <img src="../imgs/dialogl.png" class="dialogl" alt="">
          <div class="contentl">
            <p class="up">{{ dialog.text }} </p>
            <p class="down">{{ dialog.origin }}</p>
          </div>
        </div>

      </div>
    </div>
    <div class="bottom">
      <input type="text" placeholder="请在此输入诗句" v-model="inputValue" class="input">
      <div @click="handleGetInput" class="btn">发送</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
const inputValue = ref("花间一壶酒，独酌无相亲。 --李白《月下独酌》");
const turnsText = ref("到你啦！")
import { useStateStore } from '@/store/index.ts'
const store = useStateStore();
const dialogs = ref([
  { text: '花间一壶酒，独酌无相亲。', origin: '--李白《月下独酌》', position: 'right' },
  { text: '言入黄花川，每逐青溪水。', origin: '--王维《青溪》', position: 'left' },
]);
const timer = ref(180); // 初始倒计时时间为3分钟
const poetries = ref([
  { text: "当窗理云鬓，对镜贴花黄。", origin: "--《木兰辞》", position: 'left', read: false },
  { text: "采莲南塘秋，莲花过人头。", origin: "--《西洲曲》", position: 'left', read: false },
  { text: "人归落雁后，思发在花前。", origin: "--薛道衡《人日思归》", position: 'left', read: false },
  { text: "暮江平不动，春花满正开。", origin: "--杨广《春江花月夜》", position: 'left', read: false },
  { text: "花须连夜发，莫待晓风吹。", origin: "--武则天《催花诗》", position: 'left', read: false },
  { text: "他乡共酌金花酒，万里同悲鸿雁天。", origin: "--卢照邻《九月九日玄武山旅眺》", position: 'left', read: false },
  { text: "解落三秋叶，能开二月花。", origin: "--李峤《风》", position: 'left', read: false },
  { text: "江流宛转绕芳甸，月照花林皆似霰。", origin: "--张若虚《春江花月夜》", position: 'left', read: false },
  { text: "昨夜闲潭梦落花，可怜春半不还家。", origin: "--张若虚《春江花月夜》", position: 'left', read: false },
  { text: "火树银花合，星桥铁锁开。", origin: "--苏味道《正月十五夜》", position: 'left', read: false },
]);


const handleGetInput = async () => {
  store.truePoetries3 += 1;
  store.allNums += 1;
  if (inputValue.value.trim() !== "") {
    const inputParts = inputValue.value.split(" ");
    const text = inputParts[0];
    const origin = inputParts.slice(1).join(" ");
    dialogs.value.push({ text, origin, position: "right" });
    store.addFeihua({ text, origin, position: "right" });
    inputValue.value = "";
    turnsText.value = "请等待...";

    // 等待3秒后添加随机诗句
    await new Promise(resolve => setTimeout(resolve, 3000));

    const randomPoetry = getPoetry();
    dialogs.value.push(randomPoetry);
    store.addFeihua(randomPoetry);
    console.log("daia",store.feihuaPoetries)
    turnsText.value = "到你啦！";
    await new Promise(resolve => setTimeout(resolve, 5000)); // 等待3秒
    inputValue.value = getPoetry().text +getPoetry().origin
  }
  
};

const getPoetry = () => {
  const unreadPoetries = poetries.value.filter(poetry => !poetry.read);
  if (unreadPoetries.length === 0) {
    // 所有诗句都已读取，返回一个空对象或者其他指示诗句已读取完的信息
    return { text: "", origin: "", position: "" };
  }
  const randomIndex = Math.floor(Math.random() * unreadPoetries.length);
  unreadPoetries[randomIndex].read = true;
  return unreadPoetries[randomIndex];
};

const startTimer = () => {
  const intervalId = setInterval(() => {
    timer.value--;
    const inputCount = dialogs.value.length;
    if (timer.value === 0 || dialogs.value.length === 6) {
      clearInterval(intervalId); // 清除定时器
      store.changeFlywordState(2);
      console.log("输入次数：" + inputCount);
    }
  }, 1000); // 每秒减少一秒
};


onMounted(() => {
  startTimer(); // 组件挂载时启动定时器
  store.truePoetries3 = 0
  store.allNums = 0
  console.log("dssds",store.feihuaPoetries)
});


</script>


<style scoped>
.game-box {
  width: 1261rem;
  height: 642rem;
  border-radius: 10rem;
  background: rgba(251, 243, 230, 1);
  display: flex;
  flex-direction: column;
  position: relative;
}
.star{
    position:absolute;
    cursor:pointer;
    right:25.5rem;
    max-height:42.75rem;
    max-width:45rem;
  }

.top {
  width: 1261rem;
  height: 84rem;
  border-bottom: 1rem solid rgba(184, 160, 121, 1);
  display: flex;
  align-items: center;

  p {
    font-size: 24rem;
    font-weight: 400;
    color: rgba(77, 23, 0, 1);
    text-align: center;
  }

  img {

    width: 52.8rem;
    height: 55.37rem;
    margin-left: 15rem;

  }

  .p1 {
    margin-left: 513rem;
  }

  .p2 {
    margin-left: 299rem;
    margin-right: 50rem;
  }
}

.middle {
  padding-left: 35rem;
  padding-right: 35rem;
  padding-top: 30rem;
  /* padding-bottom: 30rem; */
  overflow-y: auto;
  max-height: 500rem;
  /* background: green; */
}


.dialog {
  /* padding-top: 30rem; */
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
    right: 160rem;
    top: 75rem;

    font-size: 24rem;
    font-weight: 400;
    color: rgba(77, 23, 0, 1);

  }
}

.contentl {
  position: absolute;
  left: 85rem;
  top: 100rem;
  width: 450rem;
  height: 70rem;
  font-size: 24rem;
  font-weight: 400;
  color: rgba(77, 23, 0, 1);
}

.up {
  display: flex;
  justify-content: flex-start;
}

.down {
  display: flex;
  justify-content: flex-end;
}

.dialog .left {
  margin-top: -60rem;
  width: 100%;
  position: relative;
  height: 215rem;
  display: flex;
  justify-content: flex-start;

  .dialogl {
    width: 549rem;
    height: 190rem;
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

.bottom .input {

  width: 1080rem;
  height: 49rem;

  border-radius: 10rem;
  background: rgba(255, 255, 255, 1);

  border: none;
  outline: none;
  padding-left: 13rem;
  font-size: 24rem;
  font-weight: 400;
  color: rgba(77, 23, 0, 1);
}

.bottom .btn {
  width: 89rem;
  height: 49rem;
  margin-left: 17rem;
  border-radius: 10rem;
  background: rgba(158, 106, 83, 1);

  font-size: 24rem;
  font-weight: 400;
  letter-spacing: 0rem;
  line-height: 49rem;
  color: rgba(255, 255, 255, 1);

}
</style>
