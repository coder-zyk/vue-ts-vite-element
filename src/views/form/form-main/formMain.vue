<script setup lang="ts">
import draggable from "vuedraggable";
import type { FormInfo, FormItem } from "@/views/form/index";
import formItemVue from "./formItem.vue";
import { View, Upload, Download, Tickets, Delete } from "@element-plus/icons-vue";
import { inject, onMounted, reactive, ref, watch, type Ref } from "vue";
import operateButtonVue from "./components/operateButton.vue";
import dragIconVue from "./components/dragIcon.vue";
import previewFormVue from "../form-preview/preview.vue"
import { ElAlert, ElMessage, ElMessageBox, type UploadFile, type UploadRawFile } from "element-plus";
/**表单信息 */
const formInfo: FormInfo = inject("formInfo") as FormInfo;
/**当前选中的元素 */
const selectFormItem: FormItem = inject("selectFormItem") as FormItem;
const formList: Array<FormInfo> = inject("formList") as Array<FormInfo>;
/**保存表单 */
function saveForm() {
  if (formInfo.id == 0) {
    formInfo.id = new Date().getTime() + (Math.random() * 100000).toFixed(0)
    formList.push(JSON.parse(JSON.stringify(formInfo)))
  } else {
    formList.map((item: FormInfo) => {
      if (item.id == formInfo.id) {
        Object.assign(item, JSON.parse(JSON.stringify(formInfo)))
      }
      return item
    })
  }
  localStorage.setItem('formList', JSON.stringify(formList))
  ElMessage.success('保单保存成功')
}
/**清空表单确认 */
const isClearForm: Ref<boolean> = ref(false)
/**清空表单 */
function clearForm() {
  Object.assign(formInfo, {
    id: 0,
    config: {
      name: "",
      labelPosition: "right",
      size: "default",
      labelWidth: 120,
      dbName: {
        name: "",
        dbId: 0,
      },
    },
    model: {},
    list: new Array<FormItem>,
  })
  isClearForm.value = false
  ElMessage.success('表单清空成功')
}
/**formItm添加*/
function change(event: any, row?: Array<any>) {
  if (event.added) {
    Object.assign(selectFormItem, event.added.element);
    if (!formInfo.model[event.added.element.field]) {
      formInfo.model[event.added.element.field] = selectFormItem.value
    }
  }
}

const groupRow = reactive({
  name: 'people',
  put: (to: any, from: any, element: HTMLElement, event: any) => {
    if (element.innerText == '栅格布局' || /el-row/.test(element.className))
      return false
    return true
  }
})
/**表单高度 */
const formHeight: Ref<number> = ref(0)
onMounted(() => {
  /**获取表单高度 */
  formHeight.value = document.getElementById('formRef')?.offsetHeight as number
})
/**点击事件 */
function clickHandel(element: FormItem) {
  Object.assign(selectFormItem, element)
}
/**展示预览表单弹窗 */
const showPreviewForm: Ref<boolean> = ref(false)
/**导出json */
function download() {
  if (formInfo.config.name !== '') {
    if (formInfo.id == 0) {
      formInfo.id = new Date().getTime() + (Math.random() * 100000).toFixed(0)
    }
    let blob = new Blob([JSON.stringify(formInfo)])
    let fileReader = new FileReader()
    fileReader.readAsDataURL(blob)
    fileReader.onload = () => {
      let a = document.createElement('a')
      a.href = fileReader.result as string
      a.download = formInfo.config.name + '.json'
      a.click()
      a.remove()
    }
  } else {
    ElMessage.error('请输入表单名称')
  }

}/**导入json */
function upload(file: UploadFile) {
  let fileReader = new FileReader()
  fileReader.readAsText(file.raw as Blob)
  fileReader.onload = () => {
    Object.assign(formInfo, JSON.parse(fileReader.result as string))
  }
}
const previewRef = ref()
/**验证表单 */
function validate() {
  previewRef.value.validate().then((res: any) => {
    ElMessage.success('表单验证通过')
  }).catch((error: any) => {
  })
}
watch(() => selectFormItem.field, (newValue, oldValue) => {
  let oldKey = Object.keys(formInfo.model).find((key: string) => key == oldValue)
  delete formInfo.model[oldKey as string]
  formInfo.model[newValue] = selectFormItem.value
}, { deep: true })
</script>

<template>
  <el-container class="form-main">
    <el-header
      style="height:40px;border-left: 1px var(--el-border-color) var(--el-border-style);border-right:1px var(--el-border-color) var(--el-border-style) ;">
      <el-space class="form-main-operate">
        <el-button size="small" link type="primary" :icon="Tickets" @click="saveForm">保存</el-button>
        <el-button size="small" link type="primary" :icon="View" @click="showPreviewForm = true">预览</el-button>
        <el-popconfirm title="清空后将无法恢复,确定要清空吗?" @confirm="clearForm" confirm-button-type="danger"
          confirm-button-text="清空" width="200px">
          <template #reference>
            <el-button size="small" link type="primary" :icon="Delete">清空</el-button>
          </template>
        </el-popconfirm>
        <el-button size="small" link type="primary" :icon="Download" @click="download">导出JSON</el-button>
        <el-upload action="" @change="upload" :show-file-list="false" :auto-upload="false" accept=".json">
          <template #trigger>
            <el-button size="small" link type="primary" :icon="Upload">导入JSON</el-button>
          </template>
        </el-upload>
      </el-space>
    </el-header>
    <el-main style="background-color: #f1f1f1">
      <el-form style="height: 100%;background-color: white" :size="formInfo.config.size"
        :label-width="formInfo.config.labelWidth" id="formRef" :label-position="formInfo.config.labelPosition">
        <el-scrollbar>
          <draggable :list="formInfo.list" group="people" item-key="id" handle=".draggable-icon" @change="change"
            ghost-class="form-main-ghost" :style="`min-height:${formHeight}px;width:100%`" :animation="100"
            :fallback-class="true">
            <template #item="{ element }">
              <form-item-vue :formItem="element" :formItemList="formInfo.list" v-if="element.type != 'row'">
              </form-item-vue>
              <el-row v-else :gutter="element.props.gutter" :justify="element.props.justify"
                :align="element.props.align"
                :class="`form-main-item ${selectFormItem.id == element.id ? 'form-main-item-active' : ''}`"
                @click.stop="clickHandel(element)">
                <dragIconVue :form-item="element" v-if="element.id == selectFormItem.id"></dragIconVue>
                <operateButtonVue :form-item="element" :form-item-list="formInfo.list"
                  v-if="element.id == selectFormItem.id"></operateButtonVue>
                <el-col v-for="(item, index) in element.props.children" :span="item.props.span"
                  :offset="item.props.offset" :pull="item.props.pull" :push="item.props.push"
                  @click.stop="clickHandel(item)">
                  <div style="position:relative">
                    <operateButtonVue :form-item="item" :form-item-list="element.props.children"
                      v-if="item.id == selectFormItem.id"></operateButtonVue>
                    <draggable :list="item.props.children" :group="groupRow" item-key="id" ghost-class="form-main-ghost"
                      handle=".draggable-icon" @change="change($event, item.props.children)"
                      :class="`form-main-item ${selectFormItem.id == item.id ? 'form-main-item-active' : ''}`"
                      :animation="100" :fallback-class="true">
                      <template #item="{ element }">
                        <form-item-vue :formItem="element" :formItemList="item.props.children"></form-item-vue>
                      </template>
                    </draggable>
                  </div>
                </el-col>
              </el-row>
            </template>
          </draggable>
        </el-scrollbar>
      </el-form>
    </el-main>
    <el-dialog v-model="showPreviewForm" :title="formInfo.config.name" destroy-on-close :close-on-click-modal="false">
      <el-scrollbar max-height="60vh">
        <preview-form-vue :form-info="formInfo" ref="previewRef"></preview-form-vue>
      </el-scrollbar>
      <template #footer>
        <el-space alignment="end">
          <el-button @click="showPreviewForm = false">取消</el-button>
          <el-button type="primary" @click="validate">
            确定
          </el-button>
        </el-space>
      </template>
    </el-dialog>
  </el-container>
</template>

<style scoped lang="scss">
.form-main {
  height: 100%;
  width: 100%;

  :deep(.el-row) {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .form-main-operate {
    background-color: white;
    display: flex;
    justify-content: flex-end;
    height: 40px;
  }
}
</style>
