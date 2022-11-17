<script setup lang="ts">import { inject } from 'vue';
import type { TextFormItem } from '@/views/form/index';
const configInfo: TextFormItem = inject<TextFormItem>("selectFormItem") as TextFormItem;
</script>
<template>
  <div>
    <el-divider content-position="center">基础配置</el-divider>
    <el-form-item label="标签名">
      <el-input v-model="configInfo.label" />
    </el-form-item>
    <el-form-item label="文本位置">
      <el-radio-group v-model="configInfo.props.justify">
        <el-radio-button label="start" />
        <el-radio-button label="center" />
        <el-radio-button label="end" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文字大小">
      <el-input-number v-model="configInfo.props.fontSize" :min="1" :max="100" />
    </el-form-item>
    <el-form-item label="文字颜色">
      <el-color-picker v-model="configInfo.props.color" />
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="configInfo.value" />
    </el-form-item>
  </div>
</template>
<style scoped lang="scss">

</style>
