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
        
        <timer class="p2" :font_color="'rgba(0, 15, 66, 1)'" @timeout="handleTimeout"></timer>

      </div>
      <div class="gbody">
        <div class="left">
            <img :src="currentImage" class="pic" alt="">

        </div>

        <div class="right">
            <div v-for="(option,index) in options[store.q_id-1]" :key="index" class="op-box" @click="handleClick(index)" :class="{ 'clicked': ischoosed(index), 'hoverable': !ischoosed(index) }">
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
import timer from '@/components/Timer.vue'
import pic1 from '../imgs/pic1.png'
import pic2 from '../imgs/pic2.png'
import pic3 from '../imgs/pic3.png'
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
  pic1,pic2,pic3,pic1,pic1,pic1,pic1,pic1,pic1,pic1
];
const options=[["A.爆竹声中一岁除，春风送暖入屠苏","B.蓬头稚子学垂纶，侧坐莓苔草映身","C.儿童急走追黄蝶，飞入菜花无处寻","D.知有儿童挑促织，夜深篱落一灯明"],
                  ["A.桃花潭水深千尺，不及汪伦送我情","B.春潮带雨晚来急，野渡无人舟自横","C.沉舟侧畔千帆过，病树前头万木春","D.两岸青山相对出，孤帆一片日边来"],
                  ["A.相看两不厌，只有敬亭山","B.天子呼来不上船，自称臣是酒中仙","C.天生我材必有用，千金散尽还复来","D.不识庐山真面目，只缘身在此山中"]]
    const player2_buff=[0,1,0,0,1,1,0,0,1,0];
    const currentNumber = computed(() => numbers[store.q_id - 1]);

    const currentImage=computed(()=>images[store.q_id-1]);

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
        if(store.ans_stack.length===0||store.q_id===1) return null;
        store.q_id--;
        choose.value=store.ans_stack[store.q_id-1];
        
    }

    const handleTimeout=()=>{
      console.log("计时结束");
      store.changeGameState(2);
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
      color: rgba(0, 15, 66, 1);
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
    border-radius: 10rem;

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
  