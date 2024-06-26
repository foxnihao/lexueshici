import { defineStore } from "pinia";
import { ref } from "vue";
import { createEventHook } from '@vueuse/core';
export const useGameStore = defineStore("Game2", () => {
  const beginState = ref("开始游玩");
  const GameState = ref(0);
  // beginState代表玩游戏时候传入的值分别是 开始游玩，开始匹配，匹配中...
  const changeBeginState = (newstate: string) => {
    beginState.value = newstate;
    GameState.value=0;
  };

  // 对应下方的组件，0时对应FlyBegin组件，1时对应FlySelfGame组件，2对应FlyGameOver组件
  const changeGameState = (newstate: any) => {
    GameState.value = newstate;
  };
  
  const ans_stack = ref<number[]>([]);
  
  const ans_right=ref([0,1,2]);

  const next_qHook=createEventHook();
  const q_id=ref(0);

  const board=ref([[0,0,0,0,0,0,0,'桃',' ',0,0,'偷',0,0,0,' ',' ','南',' ',' ',' ',0,0,' ',' ',0,0,' ','毛',' ',' ','水',' ',0,0,' ',0,0,0,' ','浪',0,0,' ',0,0,0,' ',0,0,0,0,0,0,0,' '],
                  [0,'满',0,0,0,0,0,0,0,' ',0,0,0,' ',0,0,0,' ',0,0,0,'听',0,0,0,'白',' ',' ','绿',' ',0,0,0,' ',0,'映' ,' ',' ',' ',' ',0,' ',0,0,0,' ',0,0,' ',' ',' ','雨',' ',0,0,0],
                  [0,'满',0,0,0,0,0,0,0,' ',0,0,0,' ',0,0,0,' ',0,0,0,'听',0,0,0,'白',' ',' ','绿',' ',0,0,0,' ',0,'映' ,' ',' ',' ',' ',0,' ',0,0,0,' ',0,0,' ',' ',' ','雨',' ',0,0,0]]);
  const boolBoard =board.value.map(row => 
    row.map(item => item === ' ')
  );

  const ans=ref([[0,0,0,0,0,0,0,'桃','过',0,0,'偷',0,0,0,'花','江','南','可','采','莲',0,0,'潭','千',0,0,'白','毛','浮','绿','水','尺',0,0,'莲',0,0,0,'深','浪',0,0,'回',0,0,0,'千',0,0,0,0,0,0,0,'尺'],
                [0,'满',0,0,0,0,0,0,0,'身',0,0,0,'近',0,0,0,'雪',0,0,0,'听',0,0,0,'白','毛','浮','绿','水',0,0,0,'走',0,'映','竹','无','人','见',0,'将',0,0,0,'声',0,0,'夜','来','风','雨','声',0,0,0],
                [0,'满',0,0,0,0,0,0,0,'身',0,0,0,'近',0,0,0,'雪',0,0,0,'听',0,0,0,'白','毛','浮','绿','水',0,0,0,'走',0,'映','竹','无','人','见',0,'将',0,0,0,'声',0,0,'夜','来','风','雨','声',0,0,0]
              ])

  const init_Store=()=>{
    q_id.value=0;
    ans_stack.value.length=0;
    num_right.value=0;
  }
  const num_right=ref(0);
  const q_num=ref(2);

  

  return { beginState, GameState, changeBeginState, changeGameState,ans_stack,init_Store,q_id,ans_right,num_right,q_num,board,next_qHook,boolBoard,ans};
});
