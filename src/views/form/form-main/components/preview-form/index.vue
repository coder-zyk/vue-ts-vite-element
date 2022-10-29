<script setup lang='ts'>
import type { FormInfo } from '@/views/form';
import { inject, reactive } from 'vue';
import generateFormItemVue from './generateFormItem.vue';
const formInfo: FormInfo = reactive(JSON.parse(JSON.stringify(inject<FormInfo>("formInfo"))));
</script>
<template>
  <el-form :label-width="formInfo.config.labelWidth" :size="formInfo.config.size"
    :label-position="formInfo.config.labelPosition">
    <template v-for="formItem in formInfo.list">
      <generateFormItemVue v-if="formItem.type != 'row'" :form-item-info="formItem"></generateFormItemVue>
      <el-row :align="formItem.props.align" :gutter="formItem.props.gutter" :justify="formItem.props.justify">
        <el-col v-for="item in formItem.props.children" :span="item.props.span" :offset="item.props.offset"
          :pull="item.props.pull" :push="item.props.push">
          <generateFormItemVue :form-item-info="item1" v-for="item1 in item.props.children"></generateFormItemVue>
        </el-col>
      </el-row>
    </template>
  </el-form>
</template>
<style scoped lang='scss'>

</style>