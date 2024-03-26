<template>
    <div class="game-box">
      <div class="top">
        <p class="p1">第一题 </p>
        
        <p class="p2">15</p>

      </div>
      <div class="gbody">
        <div class="left">
            <img src="../imgs/pic1.png" class="pic" alt="">

        </div>

        <div class="right">
            <div v-for="(option,index) in options" :key="index" class="op-box">
            <div class="content">{{ option }}</div>
            </div>

            <div class="shift-box">
                <div class="shift-button">下一题</div>
                <div class="shift-button">上一题</div>
            </div>

        </div>
      </div>
      
    </div>
  </template>
  <script setup lang="ts">
    const options=["A. 白毛浮绿水，红掌拨清波","B. 床前明月光，疑是地上霜","C. 牧童骑黄牛，歌声振林樾","D. 举头望明月，低头思故乡"]
  </script>
  
  
  <style scoped>
  .game-box {
    width: 1261rem;
    height: 642rem;
    border-radius: 10rem;
    background: rgba(235, 244, 247, 1);
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .top {
    width: 1261rem;
    height: 84rem;
    border-bottom: 1rem solid rgba(78, 123, 138, 1);
    display: flex;
    align-items: center;
  
    p {
      font-size: 24rem;
      font-weight: 400;
      color: rgba(77, 23, 0, 1);
      text-align: center;
    }
  
  
    .p1 {
      margin-left: 570rem;
    }
  
    .p2 {
      margin-left: 500rem;
    }
  }


  .gbody{
    padding-left:35rem;
    padding-right: 35rem;
    padding-top:36rem;
    padding-bottom: 38rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .gbody .left{
    height:486rem;
    width: 563rem;

    .pic{
        max-width: 100%;
        max-height: 100%;
    }
  }

  .gbody .right{
    width: 612rem;
    height:486rem;
    display: flex;
    flex-direction: column;
    gap:20rem;
  }
  .right .op-box{
    width: 612rem;
    height: 72rem;
    border-radius: 10rem;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .op-box .content{
    font-size: 24rem;
    font-weight: 400;
    color: rgba(0, 15, 66, 1)
  }
  
  .right .shift-box{
    height: 72rem;
    width: 612rem;
    position: absolute;
    bottom: 38rem;

    display: flex;
    flex-direction: row-reverse;
    gap:24rem;
  }
  
  .shift-box .shift-button{
    height: 72rem;
    width:121rem;
    border-radius: 10rem;
    background: rgba(69, 85, 130, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24rem;
    font-weight: 400;
    color: rgb(255, 255, 255)

  }
  
  </style>
  