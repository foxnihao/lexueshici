<template>
    <navbar />
    <div class="home">
        
      <h1>Welcome to My Site</h1>
      <p>This is the home page of your Vue 3 app.</p>
    </div>
  </template>
  
  <script setup lang="ts">
import navbar from './navbar.vue';

  // TypeScript脚本区域，如果你需要定义一些数据或方法，请在这里添加
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    color: #42b983;
  }
  
  p {
    margin: 20px 0;
  }
  </style>