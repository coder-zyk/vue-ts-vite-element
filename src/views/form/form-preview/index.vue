<script setup lang='ts'>
import type { FormInfo } from '../index';
import { inject, onMounted, reactive, ref } from 'vue';
import generateFormItemVue from './generateFormItem.vue';
/**表单信息 */
const formInfo: FormInfo = reactive(JSON.parse(JSON.stringify(inject<FormInfo>("formInfo"))));
const formRef = ref()
function validate() {
  return formRef.value.validate()
}
defineExpose({
  validate
})
</script>
<template>
  <el-form :label-width="formInfo.config.labelWidth" :size="formInfo.config.size"
    :label-position="formInfo.config.labelPosition" :model="formInfo.model" ref="formRef">
    <template v-for="formItem in formInfo.list">
      <generateFormItemVue v-if="formItem.type != 'row'" :form-item-info="formItem" :model="formInfo.model">
      </generateFormItemVue>
      <el-row :align="formItem.props.align" :gutter="formItem.props.gutter" :justify="formItem.props.justify">
        <el-col v-for="item in formItem.props.children" :span="item.props.span" :offset="item.props.offset"
          :pull="item.props.pull" :push="item.props.push">
          <generateFormItemVue :form-item-info="item1" v-for="item1 in item.props.children" :model="formInfo.model">
          </generateFormItemVue>
        </el-col>
      </el-row>
    </template>
  </el-form>
</template>
<style scoped lang='scss'>

</style>