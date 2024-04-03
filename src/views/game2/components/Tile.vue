<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore } from '@/store/game2';
import { storeToRefs } from 'pinia';

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
const placeholderText = computed(() => props.value === " " ? "" : "content");
const isReadonly=computed(()=>!store.boolBoard[store.q_id][props.index]);


</script>

<template>
    <input type="text" v-model="content" class="tile" :style="{ visibility: value === 0 ? 'hidden' : 'visible' }"  placeholder="" :readonly="isReadonly">

    </input>
</template>
<style scoped>
.tile {
    width: 67.92rem;
    height: 67.91rem;
    display: flex;
  justify-content: center;
  align-items: center;
  border: 1rem solid black; /* 添加边框 */
  background-color: #f0f0f0; /* 背景色 */
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 24rem;
        font-weight: 400;
        text-align: center;


}
.tile:focus {
    border: 2rem solid #142312; /* 示例：改变边框宽度和颜色 */
    outline: none; /* 移除默认的轮廓样式 */
}

</style>
.tile{}