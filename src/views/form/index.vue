<script setup lang="ts">
import type { FormInfo, FormItem } from "@/views/form/index";
import formLeft from "./form-compoents/formCompoents.vue";
import formMain from "./form-main/formMain.vue";
import formConfig from "./form-config/formConfig.vue";
import { reactive, ref, watch, provide, type Ref } from "vue";
import './style/common.scss'
/**表单列表 */
const formList: Ref<Array<FormInfo>> = ref([]);
formList.value = JSON.parse(localStorage.getItem('formList') as string) ?? []
/**表单信息 */
const formInfo: FormInfo = reactive({
  id: 0,
  config: {
    name: "",
    labelPosition: "right",
    size: "default",
    labelWidth: 120,
    dbName: {
      name: "",
      dbId: 0,
    },
  },
  model:{},
  list: new Array<FormItem>,
});
/**选中的Item */
const selectFormItem: FormItem = reactive({
  label: "",
  id: "id",
  type: "",
  field: "",
  value: '',
  required: false,
  rules:{},
  props: {},
});
/**表单数据字段表 */
const dataTables: Ref<any> = ref([]);
provide("selectFormItem", selectFormItem);
provide("formInfo", formInfo);
provide("dataTables", dataTables);
provide("formList", formList.value);
</script>
  
<template>
  <el-container class="form-container">
    <el-aside width="300px" style="height:100%">
      <form-left></form-left>
    </el-aside>
    <el-main style="min-width: 500px;padding: 0px;height:100%">
      <form-main></form-main>
    </el-main>
    <el-aside width="300px" style="height:100%">
      <form-config></form-config>
    </el-aside>
  </el-container>
</template>
  
<style scoped lang="scss">
.form-container {
  height: 100%;
  min-height: 500px;
  border-top: 1px var(--el-border-color) var(--el-border-style);
}
</style>
  