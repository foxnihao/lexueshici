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
  const message = ref(["恭喜你获得胜利！！","10"])
  
  const changeMessage = (news)=>{
    
  }

  const errPoetries = ref([])

  const changeUpdownState = (newstate:any)=>{
    console.log(newstate)
    updownState.value = newstate;
  }
// 返回状态的切换，game代表是第几个游戏，state对应游戏当中的state,切换组件
  const handleReturn = (state:number,game:number)=>{
    if(game===1){
      flywordState.value = state
      console.log(flywordState)
    }else{
      updownState.value = state
    }
  }
  return { beginState,flywordState,updownState,message,changeMessage,changeBeginState ,changeFlywordState,changeUpdownState,handleReturn }
})
