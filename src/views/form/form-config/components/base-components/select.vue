<script setup lang="ts">
import { inject } from 'vue';
import type { SelectFormItem } from '@/views/form/index';
import { Delete, Plus } from '@element-plus/icons-vue';

const configInfo: SelectFormItem = inject<SelectFormItem>("selectFormItem") as SelectFormItem;
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
    <el-form-item label="是否多选">
      <el-switch v-model="configInfo.props.multiple" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="configInfo.props.disabled" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否可以清空选项">
      <el-switch v-model="configInfo.props.clearable" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="多选时是否将选中值按文字的形式展示">
      <el-switch v-model="configInfo.props.collapseTags" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="多选时用户最多可以选择的项目数，为 0 则不限制">
      <el-input-number v-model="configInfo.props.multipleLimit" :min="0" :max="999" />
    </el-form-item>
    <el-form-item label="占位符">
      <el-input v-model="configInfo.props.placeholder" maxlength="999" />
    </el-form-item>
    <el-form-item label="是否可搜索">
      <el-switch v-model="configInfo.props.filterable" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否允许用户创建新条目">
      <el-switch v-model="configInfo.props.allowCreate" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="搜索条件无匹配时显示的文字">
      <el-input v-model="configInfo.props.noMatchText" maxlength="999" />
    </el-form-item>
    <el-form-item label="选项为空时显示的文字">
      <el-input v-model="configInfo.props.noDataText" maxlength="999" />
    </el-form-item>
    <el-divider content-position="center">验证规则</el-divider>
    <el-form-item label="字段类型">
      <el-select v-model="configInfo.validate"></el-select>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">

</style>
