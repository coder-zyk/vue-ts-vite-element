<script setup lang='ts'>
import { inject, type Ref, watch } from 'vue';
import type { FormItem } from '../..';
import {
  Rank,
} from "@element-plus/icons-vue";
const props = defineProps(["formItem"]);
const formItem = props.formItem
const isDraggable: Ref<boolean> = inject("isDraggable") as Ref<boolean>;
const selectFormItem: FormItem = inject<FormItem>("selectFormItem") as FormItem;
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
</script>
<template>
  <div class="draggable-icon" v-if="selectFormItem.id === formItem.id" @mouseenter.passive="mouseenterHandle"
    @mouseleave="mouseleaveHandle" @mousedown="mousedownHandle" @click="clickDraggableHandle()">
    <el-icon color="white" :size="20">
      <Rank />
    </el-icon>
  </div>
</template>
<style scoped lang='scss'>
.draggable-icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  z-index: 1900;
  background-color: #409eff;
  cursor: move;
}
</style>