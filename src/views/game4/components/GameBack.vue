<template>
    <div class="game-box">
      <div class="top">
        <p class="p1">第{{currentNumber}}题 </p>
        
        <img
      :src="isFavorited ? starImg : starNImg"
      @click="toggleFavorite"
      alt="favorite"
      class="star"
    />

      </div>
      <div class="gbody">
        <div class="left">
            <img :src="currentImage" class="pic" alt="">

        </div>

        <div class="right">
            <div v-for="(option,index) in options" :key="index" class="op-box"  :class="color_class(index)">
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

    const store=useGameStore();

    const numbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    const images = [
  '../imgs/pic1.png',
  '../imgs/pic2.png',
  '../imgs/pic3.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
  '../imgs/pic1.png',
];

    const currentNumber = computed(() => numbers[store.q_id - 1]);
    const currentImageURL = computed(() => images[store.q_id - 1]);
    const currentImage=new URL(currentImageURL.value,import.meta.url).href;
    const total_questions=ref(3);
    const isLastQuestion = computed(() => store.q_id === total_questions.value);
    const isRight=computed(()=>{
        if(store.ans_right[store.q_id-1]===store.ans_stack[store.q_id-1]) return true;
        else return false;
    })

    const color_class=(index:number)=>{
        if(isRight.value){
            if(index===store.ans_right[store.q_id-1]) return 'right_color'//对
            else return 'default_color';//默认
        }
        else{
            if(index===store.ans_right[store.q_id-1]) return 'right_color'//对
            else if(index===store.ans_stack[store.q_id-1]) return 'wrong_color' //错
            else return 'default_color' //默认
        }
        
    }
    const next_q=()=>{

        if(isLastQuestion.value) store.changeGameState(0);//看完回到初始界面
        store.q_id++;
        isFavorited.value=false;
    }
    const last_q=()=>{
        if(store.ans_stack.length===0) return null;
        store.q_id--;

        
    }

    const isFavorited = ref(false);
    const toggleFavorite = () => {
      isFavorited.value = !isFavorited.value;
    };
    const starImg = new URL('../imgs/star.png', import.meta.url).href;
const starNImg = new URL('../imgs/star_n.png', import.meta.url).href;
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

  .star{
    position:absolute;
    cursor:pointer;
    right:25.5rem;
    max-height:42.75rem;
    max-width:45rem;
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

    display: flex;
    justify-content: center;
    align-items: center;

  }

  .right_color{
    background-color: rgba(69, 181, 86, 1); /* 绿色背景 */


  }

  .wrong_color{
    background-color: rgba(196, 45, 45, 1); /* 绿色背景 */

  }

  .default_color{
    background-color: rgba(255, 255, 255, 1); /* 绿色背景 */

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
    background-color: rgba(69, 85, 130, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24rem;
    font-weight: 400;
    color: rgb(255, 255, 255);
    transition: background-color 0.3s; 
    cursor:pointer;
  }
  .shift-box .shift-button:hover {
  background-color: rgba(49, 65, 110, 1); /* 加深的背景颜色 */
  }
  </style>
  