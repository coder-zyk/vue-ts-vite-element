<script setup lang='ts'>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const activeIndex = ref(route.path)
watch(route, (value) => {
  activeIndex.value = value.path
})
const handleSelect = (key: string, keyPath: string[]) => {
}
</script>

<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/form">表单设计</el-menu-item>
    <el-menu-item index="/flow">流程设计</el-menu-item>
  </el-menu>
</template>

<style scoped lang='scss'>

</style>