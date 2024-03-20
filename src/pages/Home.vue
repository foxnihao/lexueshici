<template>
  
  <!-- <navbar /> -->
  <div class="home">
    
    <Background>
      
      <template v-slot:default>
        <navbar/>
        <div class="four-games">
          <div class="ga-box1">
            <img src="../../src/assets/imgs/bg1.png" class="game1 ga" />
            <p class="p1">诗词 飞花令</p>
          </div>
          <div class="ga-box2"><img src="../../src/assets/imgs/bg2.png" class="game2 ga" />
            <p class="p2">趣味 九宫格</p>
          </div>

          <div class="ga-box3"><img src="../../src/assets/imgs/bg3.png" class="game3 ga" />
            <p class="p3">上下 对对碰</p>
          </div>
          <div class="ga-box4"><img src="../../src/assets/imgs/bg4.png" class="game4 ga" />
            <p class="p4">看图 猜诗词</p>
          </div>

        </div>
      </template>
    </Background>
  </div>
</template>

<script setup lang="ts">

import Background from '../components/Background.vue';
import navbar from '../components/navbar.vue';
// TypeScript脚本区域，如果你需要定义一些数据或方法，请在这里添加
</script>

<style scoped>
.four-games {
  padding-top: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.ga-box1,
.ga-box2,
.ga-box3,
.ga-box4 {
  width: 45%;
  box-sizing: border-box;
  text-align: center;
  margin: 5px;
  position: relative;
}

.ga-box1 img,
.ga-box2 img,
.ga-box3 img,
.ga-box4 img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.ga-box1 p,
.ga-box2 p,
.ga-box3 p,
.ga-box4 p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  /** 文本1 */
  font-size: 68px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 98.46px;
  text-align: center;
  vertical-align: top;
}

.p1 {
  color: rgba(77, 23, 0, 1);
}

.p2 {
  color: rgba(0, 66, 14, 1);
}

.p3 {
  color: rgba(107, 0, 0, 1);
}

.p4 {
  color: rgba(0, 15, 66, 1);
}
</style>