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
        
        <timer class="p2" :font_color="'rgba(0, 66, 14, 1)'" @timeout="handleTimeout"></timer>

      </div>
      <div class="gbody">
        <div class="board">
          <Tile v-for="(cell, index) in board" :key=" index " :value="cell" :index="index">

          </Tile>
        </div>
        <div class="shift-box">
                <div class="shift-button" @click="next_q">{{isLastQuestion?'结束':'下一题'}}</div>
                <div class="shift-button" @click="last_q">上一题</div>
            </div>

      </div>
    </div>
  </template>
  <script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import {useGameStore} from '../../../store/game2'
import Tile from './Tile.vue'
import timer from '@/components/Timer.vue'


  

    const store=useGameStore();

    const isDuelGame=computed(()=>store.beginState==="开始匹配");
    const total_questions=ref(1);
    const isLastQuestion = computed(() => store.q_id === total_questions.value);

    const player1_score=ref(0);
    const player2_score=ref(0);
    const numbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

    const player2_buff=[0,1,0,0,1,1,0,0,1,0];
    const currentNumber = computed(() => numbers[store.q_id]);

    const board=computed(()=>store.board[store.q_id])

    //board


  
  // const board_t=ref([0,0,0,0,0,0,0,'桃',' ',0,0,'偷',0,0,0,' ',' ','南',' ',' ',' ',0,0,' ',' ',0,0,' ','毛',' ',' ','水',' ',0,0,' ',0,0,0,' ','浪',0,0,' ',0,0,0,' ',0,0,0,0,0,0,0,' '])
  onMounted(() => {
  console.log(store.boolBoard[store.q_id])
});


  // 动态生成方块并添加到 .board 中

     const {trigger}=store.next_qHook;

    const max_q=ref(0);

    const handleTimeout=()=>{
      console.log("计时结束");
      store.changeGameState(2);
    }

    const next_q=()=>{
      if(store.q_id>=max_q.value) {
        max_q.value=store.q_id;
        
        player1_score.value++;
        player2_score.value+=player2_buff[store.q_id]
      }
  //       store.ans_stack[store.q_id-1]=choose.value;
        

        
          if(isLastQuestion.value) {
  //           // setTimeout(() => {
  //   // 这里的代码会在1秒后执行
    store.changeGameState(2);
  // // }, 1000);

            }
  //       choose.value=store.ans_stack[store.q_id];
        trigger("next");
        store.q_id++;



        
    }
    const last_q=()=>{
        if(store.q_id===0) return null;
        store.q_id--;
        // choose.value=store.ans_stack[store.q_id-1];

    }


  </script>
  
  
  <style scoped>
  .game-box {
    width: 1261rem;
    height: 642rem;
    border-radius: 10rem;
    background: rgba(240, 247, 244, 1);
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .top {
    width: 1261rem;
    height: 84rem;
    border-bottom: 1rem solid rgba(129, 181, 158, 1);
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;
    gap:48rem;
  
    p {
      font-size: 24rem;
      font-weight: 400;
      color: rgba(0, 66, 14, 1);
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
    width: 1261rem;
    height: 558rem;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }

  .board{
    width: 544rem;
    height: 476rem;
    display: grid;
  grid-template-rows: repeat(7, 67.92rem); /* 创建7行，每行大小相等 */
  grid-template-columns: repeat(8, 67.91rem); /* 创建8列，每列大小相等 */
  gap: 0rem; /* 设置格子之间的间隙为0 */
  z-index: 10;
  }

  .tile {
    width: 67.92rem;
    height: 67.91rem;
    display: flex;
  justify-content: center;
  align-items: center;
  border: 1rem solid black; /* 添加边框 */
  background-color: #f0f0f0; /* 背景色 */

    .tile-content {
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 24rem;
        font-weight: 400;
        text-align: center;
    }
}
.shift-box{
    height: 72rem;
    width: 266rem;
    position: absolute;
    bottom: 38rem;
    right: 31rem;

    display: flex;
    flex-direction: row-reverse;
    gap:24rem;
  }
  .shift-box .shift-button{
    height: 72rem;
    width:121rem;
    border-radius: 10rem;
    background-color: rgba(96, 144, 108, 1);
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
  background-color: rgb(85, 132, 97); /* 加深的背景颜色 */
}
  
  </style>
  