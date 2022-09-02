<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/navbar/index.vue'
</script>

<template>
  <el-container class="zyk-container">
    <el-header class="zyk-header">
      <Navbar></Navbar>
    </el-header>
    <el-main class="zyk-main">
      <RouterView />
    </el-main>
    <el-footer class="zyk-footer">Footer</el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.zyk-container {
  height: 100%;
  width: 100%;

  .zyk-header {
    position: absolute;
    top: 0px;
    // height: 64px;
    width: 100%;
  }

  .zyk-main {
    position: absolute;
    top: 60px;
    bottom: 30px;
    width: 100%;
  }

  .zyk-footer {
    position: absolute;
    height: 30px;
    top: unset;
    bottom: 0px;
    width: 100%;

  }
}
</style>
