<script setup lang="ts">
import { inject } from 'vue';
import type { DividerFormItem } from '@/views/form/index';

const configInfo: DividerFormItem = inject<DividerFormItem>("selectFormItem") as DividerFormItem;

</script>
<template>
  <div>
    <el-divider content-position="center">属性配置</el-divider>
    <el-form-item label="设置分割线方向">
      <el-select v-model="configInfo.props.direction">
        <el-option label="horizontal" value="horizontal"></el-option>
        <el-option label="vertical" value="vertical"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="设置分割线文案">
      <el-input v-model="configInfo.value" :max="999" :min="1">
      </el-input>
    </el-form-item>
    <el-form-item label="设置分割线文案的位置">
      <el-select v-model="configInfo.props.contentPosition">
        <el-option label="left" value="left"></el-option>
        <el-option label="center" value="center"></el-option>
        <el-option label="right" value="right"></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>
<style scoped lang="scss">

</style>
