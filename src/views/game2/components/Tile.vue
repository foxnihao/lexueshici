<script setup lang="ts">


const props = defineProps<{
    value: String|number,
    index: number
}>()


</script>

<template>
    <div class="tile" :style="{ visibility: value === 0 ? 'hidden' : 'visible' }">
    <p class="tile-content">
        <slot></slot>
    </p>
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
  background-color: #f0f0f0; /* 背景色 */

    .tile-content {
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 24rem;
        font-weight: 400;
        text-align: center;
    }
}
</style>
.tile{}