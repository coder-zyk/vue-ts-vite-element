<script setup lang='ts'>
import type { FormInfo } from '@/views/form';
import { inject } from 'vue';
import generateFormItemVue from './generateFormItem.vue';
const formInfo: FormInfo = JSON.parse(JSON.stringify(inject<FormInfo>("formInfo")));
</script>
<template>
  <el-form :label-width="formInfo.config.labelWidth" :size="formInfo.config.size"
    :label-position="formInfo.config.labelPosition">
    <generateFormItemVue v-for="formItem in formInfo.list" :form-item-info="formItem"></generateFormItemVue>
  </el-form>
</template>
<style scoped lang='scss'>

</style>