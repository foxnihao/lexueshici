import { defineStore } from "pinia";
import { ref } from "vue";
export const useGameStore = defineStore("Game2", () => {
  const beginState = ref("开始游玩");
  const GameState = ref(0);
  // beginState代表玩游戏时候传入的值分别是 开始游玩，开始匹配，匹配中...
  const changeBeginState = (newstate: string) => {
    beginState.value = newstate;
  };

  // 对应下方的组件，0时对应FlyBegin组件，1时对应FlySelfGame组件，2对应FlyGameOver组件
  const changeGameState = (newstate: any) => {
    GameState.value = newstate;
  };
  
  const ans_stack = ref<number[]>([]);
  
  const ans_right=ref([0,1,2]);


  const q_id=ref(-1);
  const board=ref([
    [null,null,null,null,null,null,null,'桃'],
    [' ',null,null,'偷',null,null,null,' '],
    [' ','南',' ',' ',' ',null,null,' '],
    [' ',null,null,' ','毛',' ',' ','水'],
    [' ',null,null,' ',null,null,null,' '],
    ['浪',null,null,' ',null,null,null,' '],
    [null,null,null,null,null,null,null,' ']
  ]);
  const board_t=ref(1);

  const init_Store=()=>{
    q_id.value=1;
    // board_t.value=[0,0,0,0,0,0,0,'桃',' ',0,0,'偷',0,0,0,' ',' ','南',' ',' ',' ',0,0,' ',' ',0,0,' ','毛',' ',' ','水',' ',0,0,' ',0,0,0,' ','浪',0,0,' ',0,0,0,' ',0,0,0,0,0,0,0,' '];
    ans_stack.value.length=0;
    num_right.value=0;
  }
  const num_right=ref(0);
  const q_num=ref(3);

  return { beginState, GameState, changeBeginState, changeGameState,ans_stack,init_Store,q_id,ans_right,num_right,q_num,board,board_t};
});
