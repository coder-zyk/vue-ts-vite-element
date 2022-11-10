<script setup lang="ts">
import { inject, ref, type Ref } from "vue";
import draggable from "vuedraggable";
import type {
  FormItem,
  FormInfo,
} from "@/views/form/index";
import { maker } from "@/views/form/util";
import { formComponents, assistComponents, layoutComponents } from './index'
import formListVue from '../form-list/formList.vue'
const activeName: Ref<string> = ref("components");
/**组件拖动添加 */
function addFormItem(value: FormItem): FormItem {
  let temp: FormItem = maker[value.type]();
  temp.id = `${temp.id}_${new Date().getTime()}_${(
    Math.random() * 1000000
  ).toFixed(0)}`;
  temp.field = `${temp.field}_${(
    Math.random() * 1000000
  ).toFixed(0)}`
  return temp;
}

</script>

<template>
  <el-tabs v-model="activeName" class="form-components">
    <el-tab-pane label="组件列表" name="components" style="height:100%">
      <el-scrollbar>
        <el-divider content-position="left">表单组件</el-divider>
        <draggable :list="formComponents" :group="{ name: 'people', pull: 'clone', put: false }" item-key="id"
          :sort="false" :force-fallback="true" ghost-class="form-components-ghost" chosenClass="form-components-chosen"
          :clone="addFormItem" :fallback-class="true">
          <template #item="{ element }">
            <div class="form-components-item">
              <div class="form-components-icon">
                <i :class="`icon icon-${element.type}`"></i>
              </div>
              <span>{{ element.label }}</span>
            </div>
          </template>
        </draggable>
        <el-divider content-position="left">辅助组件</el-divider>
        <draggable :list="assistComponents" :group="{ name: 'people', pull: 'clone', put: false }" item-key="id"
          :sort="false" :force-fallback="true" ghost-class="form-components-ghost" chosenClass="form-components-chosen"
          :clone="addFormItem">
          <template #item="{ element }">
            <div class="form-components-item">
              <div class="form-components-icon">
                <i :class="`icon icon-${element.type}`"></i>
              </div>
              <span>{{ element.label }}</span>
            </div>
          </template>
        </draggable>
        <el-divider content-position="left">布局组件</el-divider>
        <draggable :list="layoutComponents" :group="{ name: 'people', pull: 'clone', put: false }" item-key="id"
          :sort="false" :force-fallback="true" ghost-class="form-components-ghost" chosenClass="form-components-chosen"
          :clone="addFormItem" :fallback-class="true">
          <template #item="{ element }">
            <div class="form-components-item">
              <div class="form-components-icon">
                <i :class="`icon icon-${element.type}`"></i>
              </div>
              <span>{{ element.label }}</span>
            </div>
          </template>
        </draggable>
      </el-scrollbar>
    </el-tab-pane>
    <el-tab-pane label="表单模板" name="template" style="height:100%">
      <el-scrollbar>
        <form-list-vue></form-list-vue>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.form-main-ghost {
  height: 5px;
  background-color: #75b5f9;
  color: #ffffff00;
}

.form-components {
  height: 100%;

  :deep(.el-tabs__content) {
    height: calc(100% - 55px);
  }

  .form-components-item {
    display: inline-block;
    background: #FFF;
    color: #000;
    min-width: 70px;
    width: 33.33%;
    min-height: 70px;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    user-select: none;

    .form-components-icon {
      padding: 10px 5px 12px;
    }

    &:hover {
      background-color: #75b5f9;
      color: #fff;
    }
  }

  .form-components-chosen {
    background-color: #75b5f9;
    color: #fff;
  }

  .form-components-ghost {
    background-color: #75b5f9;
    color: #fff;
  }
}
</style>
