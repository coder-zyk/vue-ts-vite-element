<script setup lang="ts">
import { inject, watch, type Ref } from "vue";
import type { FormItem, FormInfo } from "@/views/form/index";
import draggable from 'vuedraggable'
import {
  CopyDocument,
  Delete,
  CirclePlus,
  Rank,
} from "@element-plus/icons-vue";
import { maker } from "@/views/form/util";
const props = defineProps(["element", "formInfo"]);
/**表单信息 */
const formInfo: FormInfo = props.formInfo;
/**当前选中的元素 */
const selectFormItem: FormItem = inject<FormItem>("selectFormItem") as FormItem;
const isDraggable: Ref<boolean> = inject("isDraggable") as Ref<boolean>;
const element = props.element;

watch(
  () => selectFormItem,
  (value: FormItem) => {
    if (value.id == element.id) Object.assign(element, value);
  },
  { deep: true }
);
/**点击事件 */
function clickHandle(element: FormItem) {
  console.log(element);

  Object.assign(selectFormItem, element);
}
/**删除formitem */
function deleteFormItem() {
  let index = formInfo.list.findIndex(
    (item: FormItem) => item.id === element.id
  );
  formInfo.list = formInfo.list.filter(
    (item: FormItem) => item.id !== element.id
  );

  if (index > 0) {
    Object.assign(selectFormItem, formInfo.list[index - 1]);
  } else if (index === 0 && formInfo.list.length > 0) {
    Object.assign(selectFormItem, formInfo.list[index]);
  } else {
    selectFormItem.field = "";
  }
}
/**添加formitem */
function addFormItem() {
  let index = formInfo.list.findIndex(
    (item: FormItem) => item.id === element.id
  );
  const formItem: FormItem = maker[element.type]();
  formItem.id = `${formItem.id}_${new Date().getTime()}_${(
    Math.random() * 1000000
  ).toFixed(0)}`;
  formInfo.list.splice(index + 1, 0, formItem);
}
/**复制formitem */
function copyFormItem() {
  let index = formInfo.list.findIndex(
    (item: FormItem) => item.id === element.id
  );
  let formItem: FormItem = maker[element.type]();
  formItem.id = `${formItem.id}_${new Date().getTime()}_${(
    Math.random() * 1000000
  ).toFixed(0)}`;
  Object.assign(formItem, element);
  formInfo.list.splice(index + 1, 0, formItem);
}
/**标识是否需要改变拖动状态
 * @false 不可拖动
 * @true 可拖动
 */
let tag = false;
/**鼠标按下事件 */
function mousedownHandle(event: MouseEvent) {
  /**鼠标按下左键 */
  if (event.button == 0) {
    tag = false;
  }
}
/**鼠标移出事件 */
function mouseleaveHandle() {
  if (tag) {
    isDraggable.value = false;
  }
}
/**鼠标进入事件 */
function mouseenterHandle() {
  if (isDraggable.value) return;
  isDraggable.value = true;
  tag = true;
}
/**拖动图标点击事件 */
function clickDraggableHandle() {
  tag = false;
  isDraggable.value = false;
}

watch(
  () => isDraggable,
  (value) => {
    if (value.value) return;
    tag = false;
  },
  { deep: true }
);
/**点击栅格 */
function clickRow(element: FormItem) {
  Object.assign(selectFormItem, element);
  console.log(element);
}
</script>

<template>
  <div class="form-main-item">
    <!-- 拖动图标 -->
    <div
      class="form-main-item-draggable"
      v-if="selectFormItem.id === element.id"
      @mouseenter.passive="mouseenterHandle"
      @mouseleave="mouseleaveHandle"
      @mousedown="mousedownHandle"
      @click="clickDraggableHandle()"
    >
      <el-icon color="white" :size="20">
        <Rank />
      </el-icon>
    </div>
    <!-- 组件操作 -->
    <div class="form-main-item-operate" v-if="selectFormItem.id === element.id">
      <el-button
        link
        type="primary"
        title="添加"
        :icon="CirclePlus"
        @click="addFormItem"
      >
      </el-button>
      <el-button
        link
        type="primary"
        title="复制"
        :icon="CopyDocument"
        @click="copyFormItem"
      >
      </el-button>
      <el-button
        link
        type="danger"
        title="删除"
        :icon="Delete"
        @click="deleteFormItem"
      >
      </el-button>
    </div>
    <!-- 组件主体 -->
    <el-form-item
      :class="`form-main-item-label ${
        selectFormItem.id == element.id ? 'form-main-item-active' : ''
      }`"
      :label="element.title"
      :label-width="element.title === '' ? '0px' : ''"
      :style="`width:100%;height:${element.props.height};display:${
        element.title === '' ? 'flex' : ''
      }`"
      @click.prevent.stop="clickHandle(element)"
      v-if="element.type !== 'row'"
    >
      <!-- 标题 -->
      <div
        v-if="element.type === 'text'"
        :style="`width:${element.props.width};text-align:${element.props.position};color:${element.props.textColor};font-size:${element.props.fontSize}`"
      >
        {{ element.value }}
      </div>
      <!-- 单行输入 -->
      <el-input
        v-if="element.type === 'input'"
        v-model="element.value"
        :placeholder="element.props.placeholder"
        :style="`width:${element.props.width};`"
      ></el-input>
      <!-- 多行输入 -->
      <el-input
        type="textarea"
        v-if="element.type === 'textarea'"
        v-model="element.value"
        :style="`width:${element.props.width};`"
        :placeholder="element.props.placeholder"
      >
      </el-input>
      <!-- 数字输入 -->
      <el-input-number
        v-if="element.type === 'number'"
        v-model="element.value"
        :style="`width:${element.props.width};`"
        :placeholder="element.props.placeholder"
      >
      </el-input-number>
      <!-- 单选框 -->
      <el-radio-group
        v-if="element.type === 'radio'"
        v-model="element.value"
        :style="`width:${element.props.width};`"
        :placeholder="element.props.placeholder"
      >
        <el-radio
          v-for="item in element.props.options"
          :label="item.label"
          :value="item.value"
        ></el-radio>
      </el-radio-group>
      <!-- 多选框 -->
      <el-checkbox-group
        v-if="element.type === 'checkbox'"
        v-model="element.value"
        :style="`width:${element.props.width};`"
        :placeholder="element.props.placeholder"
      >
        <el-checkbox
          v-for="item in element.props.options"
          :label="item.label"
        ></el-checkbox>
      </el-checkbox-group>
      <!-- 选择框 -->
      <el-select
        v-if="element.type === 'select'"
        v-model="element.value"
        :style="`width:${element.props.width};`"
        :placeholder="element.props.placeholder"
      >
        <el-option
          v-for="item in element.props.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :placeholder="element.props.placeholder"
        />
      </el-select>
      <!-- 时间日期选择器 -->
      <el-date-picker
        v-if="['date', 'datetime'].includes(element.type)"
        v-model="element.value"
        :type="element.type"
        :format="element.props.format"
        :style="`width:${element.props.width};`"
        :placeholder="element.props.placeholder"
      />
      <!--评分-->
      <el-rate
        v-if="element.type === 'rate'"
        v-model="element.value"
        :style="`width:${element.props.width};`"
      />
      <!-- 开关 -->
      <el-switch
        v-if="element.type === 'switch'"
        v-model="element.value"
        inline-prompt
        active-text="是"
        inactive-text="否"
        :style="`width:${element.props.width};`"
      />
      <!-- 滑块 -->
      <el-slider
        v-if="element.type === 'slider'"
        v-model="element.value"
        :style="`width:${element.props.width};`"
      />
      <!-- 颜色选择器 -->
      <el-color-picker
        v-if="element.type === 'color'"
        v-model="element.value"
      />
    </el-form-item>
    <el-row
      v-else
      class="form-main-row"
      @click.prevent.stop="clickRow(element)"
      :gutter="element.props.gutter"
    >
      <el-col
        v-for="item in element.props.list"
        class="form-main-col"
        :span="item.props.span"
        @click.prevent.stop="clickRow(item)"
      >
        <draggable
          :list="item.props.list"
          group="people"
          item-key="id"
          :force-fallback="true"
          ghost-class="form-main-ghost"
          drag-class="form-main-drag"
          style="min-height: 70px"
          :disabled="!isDraggable"
          @end="isDraggable = false"
        >
          <template #item="el">
            <form-item
              :element="el.element"
              style="height: 100%"
              :formInfo="item"
            ></form-item>
          </template>
        </draggable>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-form-item) {
  margin-bottom: 5px !important;
  padding-bottom: 20px;
}
.form-main-item {
  position: relative;
  .form-main-item-draggable {
    position: absolute;
    top: 0px;
    left: 1px;
    width: 20px;
    height: 20px;
    z-index: 1900;
    background-color: #409eff;
    cursor: move;
  }

  .form-main-item-label {
    user-select: none;
    width: 100%;
    padding: 5px;
    padding-bottom: 20px;
    word-break: break-all;
    border: 1px dashed #409eff;
    align-items: center;

    // border: 1px dashed #dcdfe6;
    :deep(.el-form-item__label) {
      height: 100%;
      align-items: center;
    }
  }

  .form-main-item-operate {
    position: absolute;
    bottom: 0px;
    right: 5px;
    z-index: 1900;
  }

  .form-main-item-active {
    border: 1px solid #409eff;
  }
}
.form-main-ghost {
  border-left: 1px solid #409eff;
  background: #b3d8ff;
}

.form-main-drag {
  border-left: 1px solid #409eff;
  background: #b3d8ff;
}
</style>
