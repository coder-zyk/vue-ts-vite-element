<script setup lang="ts">
import { inject } from 'vue';
import type { ColFormItem } from '@/views/form/index';
const configInfo: ColFormItem = inject<ColFormItem>("selectFormItem") as ColFormItem;
</script>
<template>
  <el-form label-position="top">
    <el-divider content-position="center">属性配置</el-divider>
    <el-form-item label="栅格占据的列数">
      <el-input-number v-model="configInfo.props.span" :min="1" :max="100" />
    </el-form-item>
    <el-form-item label="栅格左侧的间隔格数">
      <el-input-number v-model="configInfo.props.offset" :min="0" :max="100" />
    </el-form-item>
    <el-form-item label="栅格向右移动格数">
      <el-input-number v-model="configInfo.props.push" :min="0" :max="100" />
    </el-form-item>
    <el-form-item label="栅格向左移动格数">
      <el-input-number v-model="configInfo.props.pull" :min="0" :max="100" />
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
