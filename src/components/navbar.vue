<template>
    <nav class="navbar">
      <router-link to="/" class="navbar-brand">
        <img src="../../public/bomb.png" alt="Logo" class="logo"/>
      </router-link>
      <div class="navbar-end">
        <router-link to="/">
          <img src="../../public/bomb.png" alt="Profile" class="icon"/>
        </router-link>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  // TypeScript script (if needed)
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #e27a11;
    justify-content: space-between; /* 这会把子元素分到两边 */
  align-items: center; /* 对齐项目到中心线 */
  padding: 0 20px; /* 按需调整内边距 */
    
  }
  .logo {
    position: absolute;
    height: 50px;
    left: 0px /* Adjust based on your logo's size */
  }
  .icon {
    position: absolute;
    height: 30px; /* Adjust based on your icon's size */
    right: 40px;
    
  }
  </style>