<script setup lang="ts">
import draggable from "vuedraggable";
import type { FormInfo, FormItem } from "@/views/form/index";
import formItem from "./formItem.vue";
import { View, Upload, Download, Tickets } from "@element-plus/icons-vue";
import { request } from "@/api/index";
import { inject, ref, watch, type Ref } from "vue";

/**表单信息 */
const formInfo: FormInfo = inject<FormInfo>("formInfo") as FormInfo;
/**当前选中的元素 */
const selectFormItem: FormItem = inject<FormItem>("selectFormItem") as FormItem;
function saveForm() {
  request
    .post("/addForm", {
      id: formInfo.id,
      list: JSON.stringify(formInfo.list),
      config: JSON.stringify(formInfo.config),
    })
    .then((res: any) => {
      console.log(res);
    });
}
/**是否可拖动 */
const isDraggable: Ref<boolean> = inject("isDraggable") as Ref<boolean>;
/**添加或移动formItm */
function change(event: any) {
  if (event.added) {
    Object.assign(selectFormItem, event.added.element);
    isDraggable.value = false;
  }
}

</script>

<template>
  <div class="form-main">
    <el-form
      style="height: 100%"
      :label-position="formInfo.config.labelPosition"
      :size="formInfo.config.labelSize"
      :label-width="formInfo.config.labelWidth"
    >
      <el-scrollbar height="100%" view-style="height:100%">
        <draggable
          :list="formInfo.list"
          group="people"
          item-key="id"
          :force-fallback="true"
          ghost-class="form-main-ghost"
          drag-class="form-main-drag"
          style="height: 100%"
          :disabled="!isDraggable"
          @change="change"
          @end="isDraggable = false"
        >
          <template #item="{ element }">
            <form-item
              :element="element"
              v-if="element.type !== 'row'"
              :formInfo="formInfo"
            ></form-item>
   
          </template>
          <template #header>
            <el-space class="form-main-operate">
              <el-button
                size="small"
                link
                type="primary"
                :icon="Tickets"
                @click="saveForm"
                >保存</el-button
              >
              <el-button size="small" link type="primary" :icon="View"
                >预览</el-button
              >
              <el-button size="small" link type="primary" :icon="Download"
                >导出JSON</el-button
              >
              <el-button size="small" link type="primary" :icon="Upload"
                >导入JSON</el-button
              >
            </el-space>
          </template>
        </draggable>
      </el-scrollbar>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.form-main {
  height: 100%;
  .form-main-operate {
    display: flex;
    justify-content: flex-end;
    height: 40px;
  }

  .form-main-ghost {
    border-left: 1px solid #409eff;
    background: #b3d8ff;
  }

  .form-main-drag {
    border-left: 1px solid #409eff;
    background: #b3d8ff;
  }
  .form-main-row {
    min-height: 80px;
    user-select: none;
    width: 100%;
    padding: 5px;
    word-break: break-all;
    border: 1px dashed #409eff;
    align-items: center;
    .form-main-col {
      min-height: 70px;
      border: 1px dashed #409eff;
    }
  }
}
</style>
