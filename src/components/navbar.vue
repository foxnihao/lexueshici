<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/imgs/logo2.png" class="logo"/>
      <img src="../assets/imgs/logo.png" alt="Logo" class="logo"/>
    </router-link>
    
      <router-link to="/me" class="navbar-end">
        <img src="../assets/imgs/ava.png" alt="Profile" class="icon"/>
      </router-link>
    
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
  right: 0;
  height: 76rem;
  width: 100%;
  background-color: rgb(130, 65, 65);
  display: flex;
  justify-content: space-between; /* 这会把子元素分到两边 */
align-items: center; /* 对齐项目到中心线 */
padding: 0 20px; /* 按需调整内边距 */

}

.navbar-brand{


  height: 36rem;
  left:20rem;
  cursor: pointer;
}
.navbar-end{
  position:absolute;
  left:  1837rem;
  width: 50rem;
  height: 50rem;

}
  

.logo {
  
  max-height: 100%;
  width:auto;
  padding-left: 10rem;
  
}
.icon {
  max-width: 50rem;
  max-height: 50rem;
}
</style>