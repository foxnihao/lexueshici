<template>
    <div class="game-box">
      <div class="top">
        <div v-if="isDuelGame" class="player_box">
          <p>{{ player1_score }}</p>
          <img src="../imgs/player1.png" class="player_pic">
        </div>
        <p class="p1">第{{currentNumber}}题 </p>
        <div v-if="isDuelGame" class="player_box">
          
          <img src="../imgs/player2.png" class="player_pic">
          <p>{{ player2_score }}</p>
        </div>
        
        <p class="p2">15</p>

      </div>
      <div class="gbody">
        <div class="left">
            <img :src="currentImage" class="pic" alt="">

        </div>

        <div class="right">
            <div v-for="(option,index) in options" :key="index" class="op-box" @click="handleClick(index)" :class="{ 'clicked': ischoosed(index), 'hoverable': !ischoosed(index) }">
            <div class="content">{{ option }}</div>
            </div>

            <div class="shift-box">
                <div class="shift-button" @click="next_q">{{isLastQuestion?'结束':'下一题'}}</div>
                <div class="shift-button" @click="last_q">上一题</div>
            </div>

        </div>
      </div>
      
    </div>
  </template>
  <script setup lang="ts">
import { computed, ref } from 'vue';
import {useGameStore} from '../../../store/game4'
  
    const options=["A. 白毛浮绿水，红掌拨清波","B. 床前明月光，疑是地上霜","C. 牧童骑黄牛，歌声振林樾","D. 举头望明月，低头思故乡"]
    const choose=ref(-1);
    const store=useGameStore();
    const handleClick=(index: number)=>{
        choose.value=index;
    }
    const isDuelGame=computed(()=>store.beginState==="开始匹配");
    const total_questions=ref(3);
    const isLastQuestion = computed(() => store.q_id === total_questions.value);
    const ischoosed=(index: number)=>{
      if(index===choose.value) return true
      else return false
    }
    const player1_score=ref(0);
    const player2_score=ref(0);
    const numbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    const images = [
  '../imgs/pic1.png',
  '../imgs/pic2.png',
  '../imgs/pic3.png',
  '../imgs/pic4.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
];
    const player2_buff=[0,1,0,0,1,1,0,0,1,0];
    const currentNumber = computed(() => numbers[store.q_id - 1]);
    const currentImageURL = computed(() => images[store.q_id - 1]);
    const currentImage=new URL(currentImageURL.value,import.meta.url).href;

    const max_q=ref(0);
    const next_q=()=>{
      if(store.q_id>max_q.value) {
        max_q.value=store.q_id;
        
        if(store.ans_right[store.q_id-1]===choose.value) {
          player1_score.value++;//对的就加分
          store.num_right++;
        }
        player2_score.value+=player2_buff[store.q_id-1]
      }
        store.ans_stack[store.q_id-1]=choose.value;
        

        
          if(isLastQuestion.value) {
            // setTimeout(() => {
    // 这里的代码会在1秒后执行
    store.changeGameState(2);
  // }, 1000);

            }
        choose.value=store.ans_stack[store.q_id];
        store.q_id++;

        
    }
    const last_q=()=>{
        if(store.ans_stack.length===0) return null;
        store.q_id--;
        choose.value=store.ans_stack[store.q_id-1];
        
    }
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
    justify-content: center; /* 水平居中 */
    align-items: center;
    gap:48rem;
  
    p {
      font-size: 24rem;
      font-weight: 400;
      color: rgba(77, 23, 0, 1);
      text-align: center;
    }
  
  
    
  
    .p2 {
      position: absolute;
      right: 44rem;
    }
  }

  .player_box{
    width: 104rem;
    height: 50rem;
    display: flex;
    flex-direction: row;
    gap:34rem;
    p{
      font-size: 36rem;
font-weight: 400;
letter-spacing: 0rem;
line-height: 52.13rem;
color: rgba(0, 15, 66, 1);

    }
    .player_pic{
      max-width: 50rem;
      max-height: 50rem;
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
    transition: background-color 0.3s;
    cursor: pointer;
  }

  .op-box .content{
    font-size: 24rem;
    font-weight: 400;
    color: rgba(0, 15, 66, 1)
  }


  .op-box.hoverable:hover {
  background-color: rgb(220, 234, 239); /* 鼠标悬停时的背景颜色 */
}

.op-box.clicked {
  background-color: rgb(183, 207, 214); /* 点击后的背景颜色 */
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
    background-color: rgba(69, 85, 130, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24rem;
    font-weight: 400;
    color: rgb(255, 255, 255);
    transition: background-color 0.3s; 
    cursor: pointer;

  }
  .shift-box .shift-button:hover {
  background-color: rgba(49, 65, 110, 1); /* 加深的背景颜色 */
}
  
  </style>
  