<template>
    <div>
        <Background />
        <div class="flyingword">
            <TopTab_t :color="'rgba(190, 232, 199, 1)'" :imgb="'/views/game2/imgs/back.png'" :imgl="`/views/game2/imgs/topbtn_l.png`" :imgr="`/views/game2/imgs/topbtn_r.png`" :font-color="'rgba(0, 66, 14, 1)'" :currentIndex="currentIndex" :handle-left-click1="handleLeftClick1" :handle-left-click2="handleLeftClick2" :handle-right-click1="handleRightClick1" :handle-right-click2="handleRightClick2"
 />
   
            <component :is="nowComponent"></component>
        </div>
    </div>
</template>
<script setup lang="ts">
import Background from '@/components/Background.vue';
import TopTab_t from '@/components/TopTab_t.vue'
import GameBegin from '@/views/game2/components/GameBegin.vue'
import GameOver from '@/views/game2/components/GameOver.vue';
import GamePlay from '@/views/game2/components/GamePlay.vue'
import GameBack from '@/views/game2/components/GameBack.vue';
import { useGameStore } from '@/store/game2.ts'
import { markRaw, onMounted, ref, watch } from 'vue';
const tabIndex = ref(0);
const btnContent = ref("开始游玩");
const store = useGameStore();
const nowComponent = ref(markRaw(GameBegin));
onMounted(() => {
    // console.log("sss",store.beginState)
})
watch(() => store.GameState, (newstate) => {
    // 
    switch (newstate) {
        case 0:
            nowComponent.value = GameBegin
            break;
        case 1:
            nowComponent.value = GamePlay;
            break;
        case 2:
            nowComponent.value = GameOver;
            break;
        case 3:
            nowComponent.value=GameBack;
            break;
        default:
            nowComponent.value = GameBegin;
    }
})

const handleCurrentIndexUpdate = (newIndex: number) => {
    console.log("变化", newIndex)

    if (newIndex === 0) {
        btnContent.value = "开始游玩"
    } else {
        btnContent.value = "开始匹配"
    }
}
const emits = defineEmits(['update:currentIndex']); // 定义需要向父组件发送的自定义事件
const currentIndex = ref(0);
watch(currentIndex, (newVal) => {
    console.log("emit")
      emits('update:currentIndex', newVal); // 向父组件发送自定义事件，并传递新的 currentIndex 值
    });
const handleLeftClick1 = () => {
    currentIndex.value = 0; // 切换为左边
    store.changeBeginState("开始游玩")
  };
  
  const handleLeftClick2 = () => {
    currentIndex.value = 0; // 切换为左边
    store.changeBeginState("开始游玩")
    store.changeGameState(0)
  };
  
  const handleRightClick1 = () => {
    currentIndex.value = 1; // 切换为右边
    store.changeBeginState("开始匹配")
  };
  const handleRightClick2 = () => {
    currentIndex.value = 1; // 切换为右边
  };
</script>


<style scoped>
.flyingword {
    padding-top: 76rem;
    margin-top: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

}
</style>