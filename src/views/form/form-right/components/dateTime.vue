<script setup lang="ts">
import { inject } from 'vue';
import type { DateFormItem } from '../..';

const configInfo: DateFormItem = inject<DateFormItem>("selectFormItem") as DateFormItem;

</script>
<template>
  <el-form label-position="top">
    <el-divider content-position="center">基础配置</el-divider>
    <el-form-item label="字段ID">
      <el-input v-model="configInfo.field" maxlength="99" />
    </el-form-item>
    <el-form-item label="标签名">
      <el-input v-model="configInfo.title"></el-input>
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
    <el-form-item label="禁用">
      <el-switch v-model="configInfo.props.disabled" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="显示类型">
      <el-select v-model="configInfo.props.type">
        <el-option label="year" value="year"></el-option>
        <el-option label="month" value="month"></el-option>
        <el-option label="date" value="date"></el-option>
        <el-option label="daterange" value="daterange"></el-option>
        <el-option label="dates" value="dates"></el-option>
        <el-option label="week" value="week"></el-option>
        <el-option label="datetime" value="datetime"></el-option>
        <el-option label="datetimerange" value="datetimerange"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文本框可输入">
      <el-switch v-model="configInfo.props.editable" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否显示清除按钮">
      <el-switch v-model="configInfo.props.clearable" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="非范围选择时的占位内容">
      <el-input v-model="configInfo.props.placeholder" maxlength="99" />
    </el-form-item>
    <el-form-item label="范围选择时开始日期的占位内容">
      <el-input v-model="configInfo.props.startPlaceholder" maxlength="99" />
    </el-form-item>
    <el-form-item label="范围选择时结束日期的占位内容">
      <el-input v-model="configInfo.props.endPlaceholder" maxlength="99" />
    </el-form-item>
    <el-form-item label="显示在输入框中的格式">
      <el-input v-model="configInfo.props.valueFormat" />
    </el-form-item>
    <el-form-item label="选择范围时的分隔符">
      <el-input v-model="configInfo.props.rangeSeparator" />
    </el-form-item>
    <el-form-item label="在范围选择器里取消两个日期面板之间的联动">
      <el-switch v-model="configInfo.props.unlinkPanels" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-divider content-position="center">验证规则</el-divider>
    <el-form-item label="字段类型">
      <el-select v-model="configInfo.validate"></el-select>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
