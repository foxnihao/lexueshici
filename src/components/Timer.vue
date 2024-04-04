<template>

      <div class="timer" :style="{ color: props.font_color }">{{ timeLeft }}</div>


  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, defineEmits } from 'vue';
  
  // 使用TypeScript定义emit函数类型
  const emit = defineEmits(['timeout']);
  const props = defineProps<{
    font_color:string
}>()
  const totalTime: number = 180; // 总时间设置为180秒，使用TypeScript定义类型
  const timeLeft = ref<number>(totalTime); // 使用ref追踪剩余时间，并指定类型
  let timer: ReturnType<typeof setInterval> | null = null;
  
  // 定义开始计时的函数
  function startTimer(): void {
    if (timer !== null) {
      clearInterval(timer); // 如果计时器已经在运行，先停止它
    }
    timeLeft.value = totalTime; // 重置时间
    timer = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--; // 时间递减
      } else {
        if (timer) clearInterval(timer); // 时间到达0时停止计时器
        emit('timeout'); // 计时结束时触发timeout事件
      }
    }, 1000); // 设置计时器每1000毫秒（1秒）触发一次
  }
  
  // 在组件挂载时启动计时器
  onMounted(() => {
    startTimer();
  });
  
  // 在组件卸载时清除计时器
  onUnmounted(() => {
    if (timer !== null) {
      clearInterval(timer);
    }
  });
  </script>

<style scoped>
.timer{
    font-size: 24rem;
    font-weight: 400;

    text-align: center;
}
</style>
  