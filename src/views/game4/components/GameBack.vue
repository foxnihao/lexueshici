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
            <div v-for="(option,index) in options[store.q_id-1]" :key="index" class="op-box"  :class="color_class(index)">
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
import pic1 from '../imgs/pic1.png'
import pic2 from '../imgs/pic2.png'
import pic3 from '../imgs/pic3.png'
const options=[["A.爆竹声中一岁除，春风送暖入屠苏","B.蓬头稚子学垂纶，侧坐莓苔草映身","C.儿童急走追黄蝶，飞入菜花无处寻","D.知有儿童挑促织，夜深篱落一灯明"],
                  ["A.桃花潭水深千尺，不及汪伦送我情","B.春潮带雨晚来急，野渡无人舟自横","C.沉舟侧畔千帆过，病树前头万木春","D.两岸青山相对出，孤帆一片日边来"],
                  ["A.相看两不厌，只有敬亭山","B.天子呼来不上船，自称臣是酒中仙","C.天生我材必有用，千金散尽还复来","D.不识庐山真面目，只缘身在此山中"]]

    const store=useGameStore();

    const numbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    const images = [
  pic1,pic2,pic3,pic1,pic1,pic1,pic1,pic1,pic1,pic1
];

    const currentNumber = computed(() => numbers[store.q_id - 1]);


    const total_questions=ref(3);
    const isLastQuestion = computed(() => store.q_id === total_questions.value);
    const isRight=computed(()=>{
        if(store.ans_right[store.q_id-1]===store.ans_stack[store.q_id-1]) return true;
        else return false;
    })
    const currentImage=computed(()=>images[store.q_id-1]);
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
      color: rgba(0, 15, 66, 1);
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
      border-radius: 10rem;
        width: 100%;
        height: 100%;
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
  