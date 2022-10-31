<script setup lang='ts'>
import { inject, type Ref, watch } from 'vue';
import type { FormItem } from '../..';
import {
  Rank,
} from "@element-plus/icons-vue";
const props = defineProps(["formItem"]);
const formItem = props.formItem
const selectFormItem: FormItem = inject<FormItem>("selectFormItem") as FormItem;

</script>
<template>
  <div class="draggable-icon" v-if="selectFormItem.id === formItem.id">
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