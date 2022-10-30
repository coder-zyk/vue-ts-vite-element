<script setup lang="ts">import { inject } from 'vue';
import type { RateFormItem } from '@/views/form/index';
const configInfo: RateFormItem = inject<RateFormItem>("selectFormItem") as RateFormItem;
</script>
<template>
  <el-form label-position="top">
    <el-divider content-position="center">基础配置</el-divider>
    <el-form-item label="字段ID">
      <el-input v-model="configInfo.field" maxlength="99"></el-input>
    </el-form-item>
    <el-form-item label="标签名">
      <el-input v-model="configInfo.label"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="configInfo.value" />
    </el-form-item>
    <el-form-item label="提示信息">
    </el-form-item>
    <el-divider content-position="center">属性配置</el-divider>
    <el-form-item label="是否必填">
      <el-switch v-model="configInfo.required" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="configInfo.props.disabled" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否允许半选">
      <el-switch v-model="configInfo.props.allowHalf" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否显示分数">
      <el-switch v-model="configInfo.props.showScore" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="最大分值">
      <el-input-number v-model="configInfo.props.max" :min="1" :max="10"></el-input-number>
    </el-form-item>
    <el-form-item label="未选中的颜色">
      <el-color-picker v-model="configInfo.props.voidColor"></el-color-picker>
    </el-form-item>
    <el-divider content-position="center">验证规则</el-divider>
    <el-form-item label="字段类型">
      <el-select v-model="configInfo.validate"></el-select>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
