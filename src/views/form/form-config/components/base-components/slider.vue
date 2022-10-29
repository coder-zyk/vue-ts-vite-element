<script setup lang="ts">import { inject } from 'vue';
import type { SliderFormItem } from '@/views/form/index';
const configInfo: SliderFormItem = inject<SliderFormItem>("selectFormItem") as SliderFormItem;
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
    <el-form-item label="内容">
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
    <el-form-item label="最大值">
      <el-input-number v-model="configInfo.props.max" :min="0" :max="9999"></el-input-number>
    </el-form-item>
    <el-form-item label="最小值">
      <el-input-number v-model="configInfo.props.min" :min="0" :max="9999"></el-input-number>
    </el-form-item>
    <el-form-item label="步长">
      <el-input-number v-model="configInfo.props.step" :min="0" :max="9999"></el-input-number>
    </el-form-item>
    <el-form-item label="是否显示输入框，仅在非范围选择时有效">
      <el-switch v-model="configInfo.props.showInput" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="在显示输入框的情况下，是否显示输入框的控制按钮">
      <el-switch v-model="configInfo.props.showInputControls" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否显示间断点">
      <el-switch v-model="configInfo.props.showStops" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否为范围选择">
      <el-switch v-model="configInfo.props.range" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否竖向模式">
      <el-switch v-model="configInfo.props.vertical" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="Slider 高度，竖向模式时必填">
      <el-input v-model="configInfo.props.height" maxlength="100" />
    </el-form-item>
    <el-divider content-position="center">验证规则</el-divider>
    <el-form-item label="字段类型">
      <el-select v-model="configInfo.validate"></el-select>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
