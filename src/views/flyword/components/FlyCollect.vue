<template>

  <div class="game-box">
    <div class="top">
      <p class="p1">本文抽到的字为 </p>
      <img src="../imgs/font.png" alt="">
    </div>
    <div class="middle">
      <div class="dialog">
        <div class="right">
          <div class="collect1">
            <el-rate v-model="value1" :max=1 :void-color="` rgba(166, 166, 166, 1)`" :colors="colors" clearable />
          </div>
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
          <div class="collect2">
            <el-rate v-model="value2" :max=1 :void-color="` rgba(166, 166, 166, 1)`" :colors="colors" clearable />
          </div>
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
import { ref } from 'vue'
import { ElRate } from 'element-plus'
const value1 = ref(0)
// const colors = ref(["rgba(255, 195, 0, 1)"])
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
const value2 = ref(0)
</script>


<style scoped>
:deep .el-icon svg {
  height: 3em;
  width: 3em;
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
  border-bottom: 1rem solid rgba(184, 160, 121, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  ;

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

.collect1,
.collect2 {
  /* width: 65rem;
  height: 42.75rem; */
}

.collect1 {
  position: absolute;
  right: 755rem;
  top: 77rem;
}

.collect2 {
  position: absolute;
  left: 620rem;
  top: 115rem;
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
