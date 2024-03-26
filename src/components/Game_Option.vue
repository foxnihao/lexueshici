<template>
    <div class="game_option">
        <button class="back-box">
            <img src="../assets/imgs/back4.png" class="icon-back"/>
            <p>返回</p>
        </button> 

        <button class="gs-box">
            <p> 自主游玩</p>
        </button>
    </div>
</template>

<script setup lang="ts">
// TypeScript script (if needed)
</script>

<style scoped>
.game_option{
    position: absolute;
    width: 100%;
    top: 76rem;
    height: 116rem;
    position: absolute;
}
.back-box{
    width: 150rem;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    left: 20rem;
    top:40rem;
    position: absolute;
}
.back-box img{
    position: absolute;
    top: 7rem;
    left: 25rem;
    height: 34rem;
    margin: 3rem;
}
.back-box p{
    font-size: 36rem;
    position: absolute;
    right: 0;
}

.gs-box{
    position: absolute;
    text-align: center;
    width: 276rem;
    height: 89.39rem;
    background-size: cover;
    background-position: center;
    background-image: url(../assets/imgs/button4.png);
    border: none;
}


.gs-box p{
    font-size: 36rem;
}
</style>
