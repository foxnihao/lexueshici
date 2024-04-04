<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore } from '@/store/game2';


const props = defineProps<{
    value: string|number,
    index: number
}>()
const store=useGameStore();
const {on}=store.next_qHook;
on((data)=>{
    store.board[store.q_id][props.index]=content.value;
})
const content = computed({
  // Getter 返回当前值
  get: () => props.value === " " ? "" : props.value,
  // Setter 更新 Pinia store 中的值
  set: (newValue) => {
    if (store.q_id!== undefined && store.board[store.q_id]) {
      store.board[store.q_id][props.index] = newValue;
    }
  }
});
const ans=computed(()=>store.ans[store.q_id][props.index]);

const isReadonly=computed(()=>!store.boolBoard[store.q_id][props.index]);
const isRight=computed(()=>props.value===store.ans[store.q_id][props.index]);

</script>

<template>
    <div v-if="isRight" class="tile" :style="{ visibility: value === 0 ? 'hidden' : 'visible',backgroundColor:isReadonly? '#f0f0f0':'rgba(69, 181, 86, 1)' }" >
        {{ content }}
    </div>
    <div v-if="!isRight" class="tile_wrong">
    <div class="tile_h" :style="{backgroundColor:'rgba(196, 45, 45, 1)'}">{{ content }}</div>
    <div class="tile_h" :style="{backgroundColor:'rgba(69, 181, 86, 1)'}">{{ ans }}</div>
    </div> 
</template>
<style scoped>
.tile {
    width: 67.92rem;
    height: 67.91rem;
    display: flex;
  justify-content: center;
  align-items: center;
  border: 1rem solid black; /* 添加边框 */

  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 24rem;
        font-weight: 400;
        text-align: center;


}
.tile_wrong{
    width: 67.92rem;
    height: 67.91rem;
    display: flex;

  border: 1rem solid black; /* 添加边框 */
  flex-direction: row;
  .tile_h{
    width: 33.96rem;
    height: 67.91rem;

    display: flex;
  justify-content: center;
  align-items: center;
  border: 1rem solid black; /* 添加边框 */

  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 24rem;
        font-weight: 400;
        text-align: center;
  }
}

</style>
.tile{}