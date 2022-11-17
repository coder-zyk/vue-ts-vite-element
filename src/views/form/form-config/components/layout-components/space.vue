<script setup lang="ts">
import { inject } from 'vue';
import type { SpaceFormItem } from '@/views/form/index';

const configInfo: SpaceFormItem = inject<SpaceFormItem>("selectFormItem") as SpaceFormItem;

</script>
<template>
  <div>
    <el-divider content-position="center">属性配置</el-divider>
    <el-form-item label="高度">
      <el-input-number v-model="configInfo.props.height" :max="999" :min="1">
      </el-input-number>
    </el-form-item>
  </div>
</template>
<style scoped lang="scss">

</style>
