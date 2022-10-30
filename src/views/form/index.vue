<script setup lang="ts">
import type { FormInfo, FormItem } from "@/views/form/index";
import formLeft from "./form-compoents/index.vue";
import formMain from "./form-main/index.vue";
import formConfig from "./form-config/index.vue";
import { reactive, ref, watch, provide, type Ref } from "vue";
import './style/common.scss'

/**表单信息 */
const formInfo: FormInfo = reactive({
  id: 0,
  config: {
    name: "",
    labelPosition: "left",
    size: "default",
    labelWidth: 90,
    dbName: {
      name: "",
      dbId: 0,
    },
  },
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
  props: {},
});
/**表单数据字段表 */
const dataTables: Ref<any> = ref([]);
/**是否可拖动 */
const isDraggable = ref(false);
provide("isDraggable", isDraggable);
provide("selectFormItem", selectFormItem);
provide("formInfo", formInfo);
provide("dataTables", dataTables);
</script>
  
<template>
  <el-container class="form-container">
    <el-aside width="300px">
      <form-left></form-left>
    </el-aside>
    <el-main style="min-width: 500px;padding: 0px;">
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
  border-top: 1px var(--el-border-color) var(--el-border-style);
}
</style>
  