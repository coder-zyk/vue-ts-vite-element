<script setup lang="ts">import { inject } from 'vue';
import type { SwitchFormItem } from '@/views/form/index';
const configInfo: SwitchFormItem = inject<SwitchFormItem>("selectFormItem") as SwitchFormItem;
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
    <el-form-item label="是否在开关内显示字">
      <el-switch v-model="configInfo.props.inlinePrompt" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="switch 打开时的文字描述">
      <el-input v-model="configInfo.props.activeText"></el-input>
    </el-form-item>
    <el-form-item label="switch 关闭时的文字描述">
      <el-input v-model="configInfo.props.inactiveText"></el-input>
    </el-form-item>
    <el-form-item label="switch 打开时的值">
      <el-input v-model="configInfo.props.activeValue"></el-input>
    </el-form-item>
    <el-form-item label="switch 关闭时的值">
      <el-input v-model="configInfo.props.inactiveValue"></el-input>
    </el-form-item>
    <el-divider content-position="center">验证规则</el-divider>
    <el-form-item label="字段类型">
      <el-select v-model="configInfo.validate"></el-select>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
