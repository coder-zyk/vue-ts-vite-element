<script setup lang='ts'>
import { inject, ref, type Ref } from 'vue';
import type { FormInfo } from '..';
/**表单信息 */
const formInfo: FormInfo = inject("formInfo") as FormInfo;
/**表单列表 */
const formList: Array<FormInfo> = inject("formList") as Array<FormInfo>;
Object.assign(formList, JSON.parse(localStorage.getItem('formList') as string))
/**点击表单模板,获取表单信息 */
function rowClickHandel(row: any) {
  Object.assign(formInfo, JSON.parse(JSON.stringify(row)))
}
</script>
<template>
  <el-table :data="formList" border style="width: 100%" @row-click="rowClickHandel">
    <el-table-column label="表单名称">
      <template #default="scope">
        {{ scope.row.config.name }}
      </template>
    </el-table-column>
  </el-table>
</template>
<style scoped lang='scss'>

</style>