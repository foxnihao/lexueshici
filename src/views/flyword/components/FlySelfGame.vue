<template>
  <div class="game-box">
    <div class="top">
      <p class="p1">本文抽到的字为 </p>
      <img src="../imgs/font.png" alt="">
      <p class="p2">到你啦！</p>
      <p>15</p>
    </div>
    <div class="middle">
      <div class="dialog">
        <div class="right">
          <img src="../imgs/dialogr.png" class="dialogr" alt="">
          <img src="../imgs/ava1.png" class="avar" alt="">
          <div class="contentr">
            <p class="up">花间一壶酒，独酌无相亲。</p>
            <p class="down"> --李白《月下独酌》</p>
          </div>
        </div>
        <div class="left">
          <img src="../imgs/ava2.png" class="aval" alt="">
          <img src="../imgs/dialogl.png" class="dialogl" alt="">
          <div class="contentl">
            <p class="up">言入黄花川，每逐青溪水。 </p>
            <p class="down">--王维《青溪》</p>
          </div>
        </div>

      </div>
    </div>
    <div class="bottom">
      <input type="text" placeholder="请在此输入诗句">
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const poetries = [
  { verse: '言入黄花川，每逐青溪水。', origin: '--王维《青溪》' },
  { "verse": "当窗理云鬓，对镜贴花黄。", "origin": "--《木兰辞》" },
  { "verse": "采莲南塘秋，莲花过人头。", "origin": "--《西洲曲》" },
  { "verse": "人归落雁后，思发在花前。", "origin": "--薛道衡《人日思归》" },
  { "verse": "暮江平不动，春花满正开。", "origin": "--杨广《春江花月夜》" },
  { "verse": "花须连夜发，莫待晓风吹。", "origin": "--武则天《催花诗》" },
  { "verse": "他乡共酌金花酒，万里同悲鸿雁天。", "origin": "--卢照邻《九月九日玄武山旅眺》" },
  { "verse": "解落三秋叶，能开二月花。", "origin": "--李峤《风》" },
  { "verse": "江流宛转绕芳甸，月照花林皆似霰。", "origin": "--张若虚《春江花月夜》" },
  { "verse": "昨夜闲潭梦落花，可怜春半不还家。", "origin": "--张若虚《春江花月夜》" },
  { "verse": "火树银花合，星桥铁锁开。", "origin": "--苏味道《正月十五夜》" },
];

const mypoetries = ref([
  { verse: '花间一壶酒，独酌无相亲。', origin: '--李白《月下独钓》' }
])
const getPoetry = () => {
  const randomIndex = Math.floor(Math.random() * poetries.length);
  return [poetries[randomIndex]];
}
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
}


.dialog {
  padding-top: 30rem;
  height: 410rem;
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
