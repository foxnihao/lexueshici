import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useGameStore = defineStore('Game4', () => {
  const beginState = ref("开始游玩");
  const GameState = ref(0);
  // beginState代表玩游戏时候传入的值分别是 开始游玩，开始匹配，匹配中...
  const changeBeginState = (newstate:string)=>{
    beginState.value = newstate;
  }

  // 对应下方的组件，0时对应FlyBegin组件，1时对应FlySelfGame组件，2对应FlyGameOver组件
  const changeFlywordState = (newstate:any)=>{
    GameState.value = newstate;
  }

  return { beginState,GameState,changeBeginState ,changeFlywordState}
})
