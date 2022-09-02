<script setup lang="ts">
  import type { FormInfo, FormItem } from "@/views/form/index";
  import formLeft from "./form-left/index.vue";
  import formMain from "./form-main/index.vue";
  import formRight from "./form-right/index.vue";
  import { reactive, ref, watch, provide, type Ref } from "vue";
  
  /**表单信息 */
  const formInfo: FormInfo = reactive({
    id: 0,
    config: {
      name: "",
      labelPosition: "left",
      labelSize: "default",
      labelWidth: 90,
      dbName: {
        name: "",
        dbId: 0,
      },
    },
    list: [],
  });
  /**选中的Item */
  const selectFormItem: FormItem = reactive({
    title: "",
    id: "id",
    type: "",
    field: "",
    value: "",
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
      <el-main>
        <form-main></form-main>
      </el-main>
      <el-aside width="300px">
        <form-right></form-right>
      </el-aside>
    </el-container>
  </template>
  
  <style scoped lang="scss">
  .form-container {
    height: 100%;
  }
  </style>
  