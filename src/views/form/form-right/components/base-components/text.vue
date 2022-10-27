<script setup lang="ts">import { inject } from 'vue';
import type { TextFormItem } from '@/views/form/index';
const configInfo: TextFormItem = inject<TextFormItem>("selectFormItem") as TextFormItem;
</script>
<template>
  <el-form label-position="top">
    <el-form-item label="标签名">
      <el-input v-model="configInfo.title" />
    </el-form-item>
    <el-form-item label="文本位置">
      <el-radio-group v-model="configInfo.props.position">
        <el-radio-button label="left" />
        <el-radio-button label="center" />
        <el-radio-button label="right" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文字大小">
      <el-input v-model="configInfo.props.fontSize" />
    </el-form-item>
    <el-form-item label="文字颜色">
      <el-color-picker v-model="configInfo.props.textColor" />
    </el-form-item>
    <el-form-item label="高度">
      <el-input v-model="configInfo.props.height" />
    </el-form-item>
    <el-form-item label="宽度">
      <el-input v-model="configInfo.props.width" />
    </el-form-item>
    <el-form-item label="内容">
      <el-input v-model="configInfo.value" />
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
