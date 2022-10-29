<script setup lang="ts">import { inject } from 'vue';
import type { RowFormItem } from '@/views/form/index';
const configInfo: RowFormItem = inject<RowFormItem>("selectFormItem") as RowFormItem;
</script>
<template>
  <el-form label-position="top">
    <el-divider content-position="center">属性配置</el-divider>
    <el-form-item label="栅格间隔">
      <el-input-number v-model="configInfo.props.gutter" :min="0" :max="100" />
    </el-form-item>
    <el-form-item label="flex 布局下的水平排列方式">
      <el-select v-model="configInfo.props.justify">
        <el-option label="start" value="start"></el-option>
        <el-option label="end" value="end"></el-option>
        <el-option label="center" value="center"></el-option>
        <el-option label="space-around" value="space-around"></el-option>
        <el-option label="space-between" value="space-between"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="flex 布局下的垂直排列方式">
      <el-select v-model="configInfo.props.align">
        <el-option label="top" value="top"></el-option>
        <el-option label="middle" value="middle"></el-option>
        <el-option label="bottom" value="bottom"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
