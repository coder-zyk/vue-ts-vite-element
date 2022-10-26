<script setup lang="ts">
import { inject, provide, ref, watch, type Ref } from "vue";
import type { FormInfo } from "@/views/form/index";
import textVue from "./components/text.vue";
import inputVue from "./components/input.vue";
import radioVue from "./components/radio.vue";
import inputNumberVue from "./components/inputNumber.vue";
import checkboxVue from "./components/checkbox.vue";
import selectVue from "./components/select.vue";
import dateTimeVue from './components/dateTime.vue'
import timeVue from "./components/time.vue";

/**表单信息 */
const formInfo: FormInfo = inject<FormInfo>("formInfo") as FormInfo;
/**当前选中的元素 */
const selectFormItem: any = inject("selectFormItem");
/**表单数据字段表 */
const dataTables = inject("dataTables");
const activeName: Ref<string> = ref("formConfig");

watch(
  () => selectFormItem.id,
  (value) => {
    if (/^[a-z]*_\d*/.test(value)) {
      activeName.value = "formItemConfig";
    } else {
      activeName.value = "formConfig";
    }
  },
  { deep: true }
);

</script>

<template>
  <el-tabs v-model="activeName" style="height:100%">
    <el-tab-pane label="表单配置" name="formConfig">
      <el-form label-position="top">
        <el-form-item label="表单名称">
          <el-input v-model="formInfo.config.name"></el-input>
        </el-form-item>
        <el-form-item label="选择数据表">
          <el-select>
            <!-- <el-tree-select v-model="formInfo.config.dbName.dbId" :data="dataTables" /> -->
          </el-select>
        </el-form-item>
        <el-form-item label="标签宽度">
          <el-input-number v-model="formInfo.config.labelWidth" :min="0" :max="999" :step="10"></el-input-number>
        </el-form-item>
        <el-form-item label="标签位置">
          <el-radio-group v-model="formInfo.config.labelPosition">
            <el-radio-button label="left" />
            <el-radio-button label="right" />
            <el-radio-button label="top" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="标签大小">
          <el-radio-group v-model="formInfo.config.labelSize">
            <el-radio-button label="small" />
            <el-radio-button label="default" />
            <el-radio-button label="large" />
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane style="height:100%" label="组件配置" name="formItemConfig" v-if="/^[a-z]*_\d*/.test(selectFormItem.id)">
      <el-scrollbar>
        <text-vue v-if="selectFormItem.type == 'text'" :config-info="selectFormItem"></text-vue>
        <input-vue v-if="selectFormItem.type == 'input'" :config-info="selectFormItem"></input-vue>
        <radio-vue v-if="selectFormItem.type == 'radio'" :config-info="selectFormItem"></radio-vue>
        <input-number-vue v-if="selectFormItem.type == 'number'" :config-info="selectFormItem"></input-number-vue>
        <checkbox-vue v-if="selectFormItem.type == 'checkbox'" :config-info="selectFormItem"></checkbox-vue>
        <select-vue v-if="selectFormItem.type == 'select'" :config-info="selectFormItem"></select-vue>
        <date-time-vue v-if="selectFormItem.type == 'datetime'" :config-info="selectFormItem"></date-time-vue>
        <time-vue v-if="selectFormItem.type == 'time'" :config-info="selectFormItem"></time-vue>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
:deep(.el-tabs__content) {
  height: calc(100% - 55px);
}
</style>
