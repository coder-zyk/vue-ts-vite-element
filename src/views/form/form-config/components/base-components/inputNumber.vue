<script setup lang="ts">
import { inject } from 'vue';
import type { InputNumberFormItem } from '@/views/form/index';

const configInfo: InputNumberFormItem = inject<InputNumberFormItem>("selectFormItem") as InputNumberFormItem;

</script>
<template>
  <el-form label-position="top">
    <el-divider content-position="center">基础配置</el-divider>
    <el-form-item label="字段ID">
      <el-input v-model="configInfo.field" maxlength="99">
      </el-input>
    </el-form-item>
    <el-form-item label="标签名">
      <el-input v-model="configInfo.label"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="configInfo.value" />
    </el-form-item>
    <el-form-item label="提示信息">
      <el-input v-model="configInfo.toolTip"></el-input>
    </el-form-item>
    <el-divider content-position="center">属性配置</el-divider>
    <el-form-item label="是否必填">
      <el-switch v-model="configInfo.required" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="设置计数器允许的最大值">
      <el-input-number v-model="configInfo.props.max" :min="0" :max="99999">
      </el-input-number>
    </el-form-item>
    <el-form-item label="设置计数器允许的最小值">
      <el-input-number v-model="configInfo.props.min" :min="0" :max="99999">
      </el-input-number>
    </el-form-item>
    <el-form-item label="计数器步长">
      <el-input-number v-model="configInfo.props.step" :min="0" :max="99999">
      </el-input-number>
    </el-form-item>
    <el-form-item label="是否只能输入 step 的倍数">
      <el-switch v-model="configInfo.props.stepStrictly" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="精度">
      <el-input-number v-model="configInfo.props.precision" :min="0" :max="10">
      </el-input-number>
    </el-form-item>
    <el-form-item label="是否禁用计数器">
      <el-switch v-model="configInfo.props.disabled" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否使用控制按钮">
      <el-switch v-model="configInfo.props.controls" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="控制按钮位置">
      <el-select v-model="configInfo.props.controlsPosition">
        <el-option label="default" value=""></el-option>
        <el-option label="right" value="right"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="输入框默认 placeholder">
      <el-input v-model="configInfo.props.placeholder">
      </el-input>
    </el-form-item>
    <el-divider content-position="center">验证规则</el-divider>
    <el-form-item label="字段类型">
      <el-select v-model="configInfo.validate"></el-select>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
