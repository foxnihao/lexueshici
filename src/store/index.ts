import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useStateStore = defineStore('state', () => {
  const beginState = ref("开始游玩");
  const flywordState = ref(0);
  const updownState = ref(0);
  // beginState代表玩游戏时候传入的值分别是 开始游玩，开始匹配，匹配中...
  const changeBeginState = (newstate: string) => {
    beginState.value = newstate;
  }

  // 对应下方的组件，0时对应FlyBegin组件，1时对应FlySelfGame组件，2对应FlyGameOver组件,
  // 3对应开始匹配的游戏界面 FlyMatchGame,4对应收藏界面FlyMatchGame
  const changeFlywordState = (newstate: any) => {
    console.log(newstate)
    flywordState.value = newstate;
  }
  const message = ref(["恭喜你获得胜利！！", "10"])

  const changeMessage = (news: any) => {

  }

  const changeUpdownState = (newstate: any) => {
    console.log(newstate)
    updownState.value = newstate;
  }
  // 返回状态的切换，game代表是第几个游戏，state对应游戏当中的state,切换组件
  const handleReturn = (state: number, game: number) => {
    if (game === 1) {
      flywordState.value = state
      console.log(flywordState)
    } else {
      updownState.value = state
    }
  }


  const truePoetries1 = 0
  const truePoetries2 = 0
  const truePoetries3 = 0
  const truePoetries4 = 0
  const allNums = 0
  const endLength = 8
  const gameTime = 120
  const checkoutIsTrue = (poetry: string, myanswer: string) => {
    return poetry === myanswer.trim()
  }

  const poetries = [
    { givened: '鹅鹅鹅，曲项向天歌', myanswer: '白毛浮绿水，红掌拨清波', trueanswer: '白毛浮绿水，红掌拨清波' },
    { givened: '床前明月光，疑是地上霜', myanswer: '举头望明月，低头想人生', trueanswer: '举头望明月，低头思故乡' }
  ]

  const feihuaPoetries = ref([
    { text: '花间一壶酒，独酌无相亲。', origin: '--李白《月下独酌》', position: 'right' },
    { text: '言入黄花川，每逐青溪水。', origin: '--王维《青溪》', position: 'left' },
  ])

  const addErr = (givened: any, myanswer: any, trueanswer: any) => {
    console.log("失败")
    poetries.push({
      givened: givened,
      myanswer: myanswer,
      trueanswer: trueanswer

    })
  }
  const addFeihua = (poetry: { text: string; origin: string; position: string; }) => {
    console.log(poetry, "add")
    feihuaPoetries.value.push(poetry)
    console.log(feihuaPoetries, "ddddd")
  }

  const feihuaPoetriesclear = () => {
    feihuaPoetries.value = []
  }

  // 个人信息
  const name = "嘻嘻"
  const birthdate = "2003-11-11"
  const gender = "女"
  const phone = "123456789"

  return {
    beginState, flywordState, updownState, message, changeMessage, changeBeginState, changeFlywordState, changeUpdownState, handleReturn,
    checkoutIsTrue, addErr, addFeihua, truePoetries1, truePoetries2, truePoetries3, truePoetries4, allNums,
    poetries, feihuaPoetries, feihuaPoetriesclear, endLength, gameTime,
    name, birthdate, gender, phone
  }
})
