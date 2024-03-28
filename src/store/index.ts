import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useStateStore = defineStore('state', () => {
  const beginState = ref("开始游玩");
  const flywordState = ref();
  const updownState = ref();
  // beginState代表玩游戏时候传入的值分别是 开始游玩，开始匹配，匹配中...
  const changeBeginState = (newstate:string)=>{
    beginState.value = newstate;
  }

  // 对应下方的组件，0时对应FlyBegin组件，1时对应FlySelfGame组件，2对应FlyGameOver组件,
  // 3对应开始匹配的游戏界面 FlyMatchGame,4对应收藏界面FlyMatchGame
  const changeFlywordState = (newstate:any)=>{
    console.log(newstate)
    flywordState.value = newstate;
  }

  const changeUpdownState = (newstate:any)=>{
    console.log(newstate)
    updownState.value = newstate;
  }
  return { beginState,flywordState,updownState,changeBeginState ,changeFlywordState,changeUpdownState}
})


// export const useStateStore = defineStore('state', () => {
//   state: () => ({ count: 0 }),
//   getters: {
//     double: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })