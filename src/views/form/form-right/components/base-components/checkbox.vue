<script setup lang="ts">
import { inject } from 'vue';
import type { CheckboxFormItem } from '@/views/form/index';
import { Delete, Plus } from '@element-plus/icons-vue';

const configInfo: CheckboxFormItem = inject<CheckboxFormItem>("selectFormItem") as CheckboxFormItem;
</script>
<template>
  <el-form label-position="top">
    <el-divider content-position="center">基础配置</el-divider>
    <el-form-item label="字段ID">
      <el-input v-model="configInfo.field" maxlength="99"></el-input>
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
    <el-form-item label="选项数据">
      <el-radio-group v-model="configInfo.remote">
        <el-radio-button :label="false">静态数据</el-radio-button>
        <el-radio-button :label="true">接口数据</el-radio-button>
        <div v-if="!configInfo.remote">
          <el-table :data="configInfo.data" style="width: 100%;margin-top: 10px;" border size="small">
            <el-table-column label="label">
              <template #default="scope">
                <el-input v-model="scope.row.label" size="small"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="value">
              <template #default="scope">
                <el-input v-model="scope.row.value" size="small"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="scope">
                <el-button type="danger" size="small" :icon="Delete"
                  @click="configInfo.data = configInfo.data.filter((item: any) => item.value != scope.row.value)">
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button link size="small" :icon="Plus"
            @click="() => { configInfo.data.push({ label: `选项${configInfo.data.length + 1}`, value: configInfo.data.length + 1 }) }">
            添加</el-button>
        </div>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="configInfo.props.disabled" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否显示边框">
      <el-switch v-model="configInfo.props.border" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="按钮形式">
      <el-switch v-model="configInfo.props.isButton" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="可被勾选的 checkbox 的最小数量">
      <el-input-number v-model="configInfo.props.min" :min="1" :max="999" />
    </el-form-item>
    <el-form-item label="可被勾选的 checkbox 的最大数量">
      <el-input-number v-model="configInfo.props.max" :min="1" :max="999" />
    </el-form-item>
    <el-form-item label="按钮形式的 Checkbox  激活时的文本颜色">
      <el-color-picker v-model="configInfo.props.textColor" />
    </el-form-item>
    <el-form-item label="按钮形式的 Checkbox  激活时的填充色和边框色">
      <el-color-picker v-model="configInfo.props.fill" />
    </el-form-item>
    <el-divider content-position="center">验证规则</el-divider>
    <el-form-item label="字段类型">
      <el-select v-model="configInfo.validate"></el-select>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
