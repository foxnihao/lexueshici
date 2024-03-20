<template>
  <div>
    <div class="nav"></div>
    <div class="body">
      <div class="left">
        <div class="imglefttop"><img src="../../src/assets/imgs/imglettop.png" /></div>
        <div class="imgleftbot"> <img src="../../src/assets/imgs/imgleftbot.png" alt=""></div>
      </div>
      <div class="middle">
        <slot></slot>
      </div>

      <div class="right">
        <div class="imgright"> <img src="../../src/assets/imgs/imgright.png" alt=""></div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// import navbar from './navbar.vue';

// TypeScript脚本区域，如果你需要定义一些数据或方法，请在这里添加
</script>

<style scoped>
.body {
  width: 100%;
  height: 876rem;
  position: relative;
  opacity: 1;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* background: green; */

}
.nav{
  height: 76rem;
  background: rgb(194, 124, 124);
}
.left {
  flex: 1;
  /* background: red; */

  .imglefttop {
    width: 15%;
    position: absolute;
    top: 30%;
    left: 0;

    img {
      max-width: 100%;
      /* 图片最大宽度为容器宽度 */
      height: auto;
      /* 高度自适应，保持宽高比 */
    }
  }

  .imgleftbot {
    /* width: 20%; */
    position: absolute;
    bottom: 0;
    left: 0;

    img {
      max-width: 160rem;
      height: auto;
    }
  }

}

.right {
  flex: 1;
  /* background: yellow; */

  .imgright {
    /* background: rgb(65, 207, 145); */
    width: 16%;
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      max-width: 100%;
      /* 图片最大宽度为容器宽度 */
      height: auto;
      /* 高度自适应，保持宽高比 */
    }
  }

}



.middle {
  flex: 4;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>