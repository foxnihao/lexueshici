<template>
    <div>
        <Background />
        <div class="flyingword">
            <TopTab :bg-color="'rgba(69, 85, 130, 1)'" :font-color="'white'" :current-index="tabIndex"
                @update:currentIndex="handleCurrentIndexUpdate" />
            <div style="height: 30rem;"></div>
            <component :is="nowComponent"></component>
        </div>
    </div>
</template>
<script setup lang="ts">
import Background from '@/components/Background.vue';
import TopTab from '@/components/TopTab.vue'
import GameBegin from '@/views/game4/components/GameBegin.vue'
import FlyGameOver from '@/views/flyword/components/FlyGameOver.vue';
import GamePlay from '@/views/game4/components/GamePlay.vue'
import { useGameStore } from '@/store/game4.ts'
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
            nowComponent.value = FlyGameOver;
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