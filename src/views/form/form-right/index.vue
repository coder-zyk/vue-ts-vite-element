<script setup lang="ts">
import { inject, ref, watch, type Ref } from "vue";
import type { FormInfo, FormItem } from "@/views/form/index";
/**表单信息 */
const formInfo: FormInfo = inject<FormInfo>("formInfo") as FormInfo;
/**当前选中的元素 */
const selectFormItem: FormItem = inject<FormItem>("selectFormItem") as FormItem;
/**表单数据字段表 */
const dataTables = inject<FormItem>("dataTables");
const activeName: Ref<string> = ref("formConfig");

watch(
  () => selectFormItem.id,
  (value) => {
    // console.log(value);

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
  <el-tabs v-model="activeName">
    <el-tab-pane label="表单配置" name="formConfig">
      <el-form label-position="top">
        <el-form-item label="表单名称">
          <el-input v-model="formInfo.config.name"></el-input>
        </el-form-item>
        <el-form-item label="选择数据表">
          <el-select>
            <el-tree-select
              v-model="formInfo.config.dbName.dbId"
              :data="dataTables"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="标签宽度">
          <el-input-number
            v-model="formInfo.config.labelWidth"
            :min="0"
            :max="999"
            :step="10"
          ></el-input-number>
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
    <el-tab-pane
      label="组件配置"
      name="formItemConfig"
      v-if="/^[a-z]*_\d*/.test(selectFormItem.id)"
    >
      <el-form label-position="top">
        <el-form-item label="名称">
          <el-input v-model="selectFormItem.title" />
        </el-form-item>
        <!--文本独有-->
        <div v-if="selectFormItem.type == 'text'">
          <el-form-item label="文本位置">
            <el-radio-group v-model="selectFormItem.props.position">
              <el-radio-button label="left" />
              <el-radio-button label="center" />
              <el-radio-button label="right" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文字大小">
            <el-input v-model="selectFormItem.props.fontSize" />
          </el-form-item>
          <el-form-item label="文字颜色">
            <el-color-picker v-model="selectFormItem.props.textColor" />
          </el-form-item>
        </div>
        <el-form-item label="高度">
          <el-input v-model="selectFormItem.props.height" />
        </el-form-item>
        <el-form-item label="宽度">
          <el-input v-model="selectFormItem.props.width" />
        </el-form-item>
        <el-form-item label="占位信息">
          <el-input
            v-model="selectFormItem.props.placeholder"
            :placeholder="selectFormItem.props.placeholder"
          />
        </el-form-item>
        <el-form-item label="内容" v-if="selectFormItem.type !== 'switch'">
          <el-input v-model="selectFormItem.value" />
        </el-form-item>
        <!-- <el-form-item label="是否必填" v-if="selectFormItem.type !== 'text'">
          <div style="display: flex">
            <el-switch
              v-model="selectFormItem"
              inline-prompt
              active-text="是"
              inactive-text="否"
              style="margin-right: 5px"
            />
            <el-input
              v-if="selectFormItem"
              v-model="selectFormItem"
              placeholder="请输入提示信息"
            />
          </div>
        </el-form-item> -->
        <el-form-item label="验证规则"> </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss"></style>
