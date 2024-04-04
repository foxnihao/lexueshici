import { defineStore } from "pinia";
import { ref } from "vue";
export const useGameStore = defineStore("Game4", () => {
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
  const options=[["A.爆竹声中一岁除，春风送暖入屠苏","B.蓬头稚子学垂纶，侧坐莓苔草映身","C.儿童急走追黄蝶，飞入菜花无处寻","D.知有儿童挑促织，夜深篱落一灯明"],
                  ["A.桃花潭水深千尺，不及汪伦送我情","B.春潮带雨晚来急，野渡无人舟自横","C.沉舟侧畔千帆过，病树前头万木春","D.两岸青山相对出，孤帆一片日边来"],
                  ["A.相看两不厌，只有敬亭山","B.天子呼来不上船，自称臣是酒中仙","C.天生我材必有用，千金散尽还复来","D.不识庐山真面目，只缘身在此山中"]]
  const ans_right=ref([0,0,0]);


  const q_id=ref(-1);

  const init_Store=()=>{
    q_id.value=1;
    ans_stack.value.length=0;
    num_right.value=0;
  }
  const num_right=ref(0);
  const q_num=ref(3);

  return { beginState, GameState, changeBeginState, changeGameState,ans_stack,init_Store,q_id,ans_right,num_right,q_num,options};
});
