<script setup lang="ts">
import { inject } from 'vue';
import type { InputFormItem } from '@/views/form/index';

const configInfo: InputFormItem = inject<InputFormItem>("selectFormItem") as InputFormItem;
/**验证规则改变 */
function rulesChange(value: any) {
  configInfo.rules.type = value
}
</script>
<template>
  <div>
    <el-divider content-position="center">基础配置</el-divider>
    <el-form-item label="字段名">
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
    <el-form-item label="类型">
      <el-select v-model="configInfo.props.type">
        <el-option label="text" value="text"></el-option>
        <el-option label="textarea" value="textarea"></el-option>
        <el-option label="number" value="number"></el-option>
        <el-option label="password" value="password"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="最大输入长度">
      <el-input-number v-model="configInfo.props.maxlength" :min="0" :max="99999">
      </el-input-number>
    </el-form-item>
    <el-form-item label="最小输入长度">
      <el-input-number v-model="configInfo.props.minlength" :min="0" :max="99999">
      </el-input-number>
    </el-form-item>
    <el-form-item label="是否显示输入字数统计" v-if="configInfo.props.type == 'textarea'">
      <el-switch v-model="configInfo.props.showWordLimit" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="输入框占位文本">
      <el-input v-model="configInfo.props.placeholder" />
    </el-form-item>
    <el-form-item label="是否可清空">
      <el-switch v-model="configInfo.props.clearable" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否显示切换密码图标">
      <el-switch v-model="configInfo.props.showPassword" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="configInfo.props.disabled" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="输入框行数" v-if="configInfo.props.type == 'textarea'">
      <el-input-number v-model="configInfo.props.rows" :min="1" :max="100">
      </el-input-number>
    </el-form-item>
    <el-form-item label="自动补全">
      <el-switch v-model="configInfo.props.autocomplete" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否只读">
      <el-switch v-model="configInfo.props.readonly" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="控制是否能被用户缩放">
      <el-select v-model="configInfo.props.resize">
        <el-option label="none" value="none"></el-option>
        <el-option label="both" value="both"></el-option>
        <el-option label="horizontal" value="horizontal"></el-option>
        <el-option label="vertical" value="vertical"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="自动获取焦点">
      <el-switch v-model="configInfo.props.autofocus" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-divider content-position="center">验证规则</el-divider>
    <el-form-item label="字段类型">
      <el-select :model-value="configInfo.rules.type" @update:model-value="rulesChange">
        <el-option label="字符串" value="string"></el-option>
        <el-option label="数字" value="number"></el-option>
        <el-option label="邮箱" value="email"></el-option>
        <el-option label="手机号码" value="phone"></el-option>
        <el-option label="汉字" value="chinese"></el-option>
        <el-option label="IP地址" value="ip"></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>
<style scoped lang="scss">

</style>
