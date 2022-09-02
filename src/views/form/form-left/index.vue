<script setup lang="ts">
import { inject, ref, type Ref } from "vue";
import draggable from "vuedraggable";
import {
  formBaseItems,
  formAdvancedItems,
  formLayoutItems,
  type FormItem,
  type FormInfo,
} from "@/views/form/index";
import { maker } from "@/views/form/util";
/**表单信息 */
const formInfo: FormInfo = inject<FormInfo>("formInfo") as FormInfo;
/**当前选中的元素 */
const selectFormItem: FormItem = inject<FormItem>("selectFormItem") as FormItem;
const isDraggable: Ref<boolean> = inject("isDraggable") as Ref<boolean>;
const formDatas = ref([]);

const activeName: Ref<string> = ref("components");
/**组件拖动添加 */
function addFormItem(value: FormItem): FormItem {
  isDraggable.value = true;
  let temp: FormItem = maker[value.type]();
  temp.id = `${temp.id}_${new Date().getTime()}_${(
    Math.random() * 1000000
  ).toFixed(0)}`;
  if (value.type === "row") {
    let cols = [maker.col(), maker.col()];
    cols[0].id = `${cols[0].id}_${new Date().getTime()}_${(
      Math.random() * 1000000
    ).toFixed(0)}`;
    cols[1].id = `${cols[1].id}_${new Date().getTime()}_${(
      Math.random() * 1000000
    ).toFixed(0)}`;
    temp.props.list = cols;
  }
  return temp;
}
/**点击表单模板,获取表单信息 */
function rowClickHandel(row: any) {
  selectFormItem.field = "";
  formInfo.id = row.id;
  formInfo.list = JSON.parse(row.list);
  formInfo.config = JSON.parse(row.config);
}
/**拖动结束 禁止拖动 */
function end() {
  isDraggable.value = false;
}
</script>

<template>
  <el-tabs v-model="activeName" class="form-left">
    <el-tab-pane label="组件列表" name="components">
      <el-divider content-position="left">基础组件</el-divider>
      <div class="form-left-border">
        <draggable
          :list="formBaseItems"
          :group="{ name: 'people', pull: 'clone', put: false }"
          item-key="field"
          :sort="false"
          :force-fallback="true"
          ghost-class="form-left-ghost"
          drag-class="form-left-drag"
          @end="end"
          :clone="addFormItem"
        >
          <template #item="{ element }">
            <div class="form-left-label">
              {{ element.title }}
            </div>
          </template>
        </draggable>
      </div>
      <el-divider content-position="left">高级组件</el-divider>
      <div class="form-left-border">
        <draggable
          :list="formAdvancedItems"
          :group="{ name: 'people', pull: 'clone', put: false }"
          item-key="field"
          :sort="false"
          :force-fallback="true"
          ghost-class="form-left-ghost"
          drag-class="form-left-drag"
          :clone="addFormItem"
          @end="end"
        >
          <template #item="{ element }">
            <div class="form-left-label">
              {{ element.title }}
            </div>
          </template>
        </draggable>
      </div>
      <el-divider content-position="left">布局组件</el-divider>
      <div class="form-left-border">
        <draggable
          :list="formLayoutItems"
          :group="{ name: 'people', pull: 'clone', put: false }"
          item-key="field"
          :sort="false"
          :force-fallback="true"
          ghost-class="form-left-ghost"
          drag-class="form-left-drag"
          :clone="addFormItem"
          @end="end"
        >
          <template #item="{ element }">
            <div class="form-left-label">
              {{ element.title }}
            </div>
          </template>
        </draggable>
      </div>
    </el-tab-pane>
    <el-tab-pane label="表单模板" name="template">
      <el-table
        :data="formDatas"
        border
        style="width: 100%"
        @row-click="rowClickHandel"
      >
        <el-table-column prop="id" label="id" width="50" />
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.form-left {
  .form-left-border {
    // border: 1px solid #dcdfe6;

    div {
      margin: 10px;
    }
  }

  .form-left-label {
    user-select: none;
    width: 119px;
    text-align: center;
    display: inline-block;
    cursor: move;
    border: 1px dashed #dcdfe6;

    &:hover {
      color: #409eff;
      border: 1px dashed #409eff;
    }
  }

  .form-left-ghost {
    color: #409eff;
    border: 1px dashed #409eff;
  }

  .form-left-drag {
    color: #409eff;
    border: 1px dashed #409eff;
  }
}
</style>
