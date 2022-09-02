<script setup lang='ts'>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>功能列表</template>
      <el-menu-item index="/form">表单设计</el-menu-item>
      <el-menu-item index="/flow">流程设计</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">关于</el-menu-item>
  </el-menu>
</template>

<style scoped lang='scss'>
</style>