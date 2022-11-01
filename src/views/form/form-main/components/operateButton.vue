<script setup lang='ts'>
import {
  CopyDocument,
  Delete,
  CirclePlus,
} from "@element-plus/icons-vue";
import { maker } from "@/views/form/util";
import type { ColFormItem, FormItem, RowFormItem } from "@/views/form/index";
import { inject } from "vue";
const props = defineProps(["formItem", "formItemList"]);
const formItem: FormItem = props.formItem
/**表单子列表 */
const formItemList: Array<FormItem> = props.formItemList;
const selectFormItem: FormItem = inject<FormItem>("selectFormItem") as FormItem;
/**删除formitem */
function deleteFormItem() {
  let index = formItemList.findIndex((item: FormItem) => item.id == formItem.id)
  formItemList.splice(index, 1)
  selectFormItem.id = ''
}
/**添加formitem */
function addFormItem() {
  let index = formItemList.findIndex((item: FormItem) => item.id == formItem.id)
  let tempFormItem: FormItem = maker[formItem.type]()
  tempFormItem.id = `${formItem.type}_${new Date().getTime()}_${(Math.random() * 1000000).toFixed(0)}`
  formItemList.splice(index + 1, 0, tempFormItem)
}
/**复制formitem */
function copyFormItem() {
  let index = formItemList.findIndex((item: FormItem) => item.id == formItem.id)
  let tempFormItem: FormItem = maker[formItem.type]()
  Object.assign(tempFormItem, JSON.parse(JSON.stringify(formItem)))
  tempFormItem.id = `${formItem.type}_${new Date().getTime()}_${(Math.random() * 1000000).toFixed(0)}`
  if (formItem.type == 'row') {
    tempFormItem.props.children.map((item: ColFormItem) => {
      item.id = `${item.type}_${new Date().getTime()}_${(Math.random() * 1000000).toFixed(0)}`
      item.props.children.map((item1: FormItem) => {
        item1.id = `${item1.type}_${new Date().getTime()}_${(Math.random() * 1000000).toFixed(0)}`
        return item1
      })
      return item
    })
  } else if (formItem.type == 'col') {
    tempFormItem.props.children.map((item: ColFormItem) => {
      item.id = `${item.type}_${new Date().getTime()}_${(Math.random() * 1000000).toFixed(0)}`
      return item
    })
  }
  formItemList.splice(index + 1, 0, tempFormItem)
}

/**添加col */
function addCol() {
  let tempFormItem: FormItem = maker.col()
  tempFormItem.id = `col_${new Date().getTime()}_${(Math.random() * 1000000).toFixed(0)}`
  formItem.props.children.push(tempFormItem)

}
</script>
<template>
  <div class="operate-button">
    <el-button link type="primary" title="添加" :icon="CirclePlus" @click.stop="addFormItem">
    </el-button>
    <el-button link type="primary" title="添加列" :icon="CirclePlus" @click.stop="addCol" v-if="formItem?.type == 'row'">
    </el-button>
    <el-button link type="primary" title="复制" :icon="CopyDocument" @click.stop="copyFormItem">
    </el-button>
    <el-button link type="danger" title="删除" :icon="Delete" @click.stop="deleteFormItem">
    </el-button>
  </div>
</template>
<style scoped lang='scss'>
.operate-button {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1900;
}
.el-button+.el-button{
  margin-left: 6px;
}
</style>