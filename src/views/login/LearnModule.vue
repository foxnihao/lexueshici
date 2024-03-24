<template>
  <div class="four-games">
    <div class="ga-box1">
      <img src="@/assets/imgs/bg1.png" class="game1 ga" />
      <p class="bigger">诗词飞花令</p>
      <div class="smaller">
        <p>游玩时长：3h</p>
        <p>匹配胜率：80%</p>
      </div>
    </div>
    <div class="ga-box2"><img src="@/assets/imgs/bg2.png" class="game2 ga" />
      <p class="bigger">趣味九宫格</p>
      <div class="smaller">
        <p>游玩时长：3h</p>
        <p>匹配胜率：80%</p>
      </div>>
    </div>

    <div class="ga-box3"><img src="@/assets/imgs/bg3.png" class="game3 ga" />
      <p class="bigger">诗词飞花令</p>
      <div class="smaller">
        <p>游玩时长：3h</p>
        <p>匹配胜率：80%</p>
      </div>
    </div>
    <div class="ga-box4"><img src="@/assets/imgs/bg4.png" class="game4 ga" />
      <p class="bigger">诗词飞花令</p>
      <div class="smaller">
        <p>游玩时长：3h</p>
        <p>匹配胜率：80%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  /* 水平居中 */
}

.four-games {
  width: 905rem;
  box-sizing: border-box;
  padding-top: 34rem;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  row-gap: 47rem;
  /* 行间距 */
  column-gap: 71rem;
  /* 列间距 */
  background: white;
  margin: auto 0;
}

.ga-box1,
.ga-box2,
.ga-box3,
.ga-box4 {
  /* width: 45%; */

  width: 420.51rem;
  height: 252.31rem;
  opacity: 1;
  border-radius: 10rem;
  box-sizing: border-box;
  text-align: center;
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
  opacity: 0.8;

}


.bigger {
  position: absolute;
  top: 29rem;
  left: 50rem;
  font-size: 36rem;
  font-weight: 500;
}

.smaller {
  position: absolute;
  top: 111rem;
  left: 50rem;
  font-size: 24rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}




.ga-box1 {
  color: rgba(77, 23, 0, 1);
}

.ga-box2 {
  color: rgba(0, 66, 14, 1);
}

.ga-box3 {
  color: rgba(107, 0, 0, 1);
}

.ga-box4 {
  color: rgba(0, 15, 66, 1);
}
</style>