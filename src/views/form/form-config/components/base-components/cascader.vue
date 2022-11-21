<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';
import type { CascaderFormItem } from '@/views/form/index';
import { Warning } from '@element-plus/icons-vue'
import codemirror from '@/views/form/components/codemirror/index.vue'
const configInfo: CascaderFormItem = inject("selectFormItem") as CascaderFormItem;

const codeParamsRef = ref()
const codeHeaderRef = ref()

/**展示附加参数 */
const showParams: Ref<boolean> = ref(false)
/**展示header信息 */
const showHeader: Ref<boolean> = ref(false)
/**导出附加参数 */
function exportParamsData() {
  configInfo.remoteSetting.params = codeParamsRef.value.exportData()
  showParams.value = false
}
/**导出header信息 */
function exportHeaderData() {
  configInfo.remoteSetting.header = codeParamsRef.value.exportData()
  showHeader.value = false
}
</script>
<template>
  <div>
    <el-divider content-position="center">基础配置</el-divider>
    <el-form-item label="字段名">
      <el-input v-model="configInfo.field" maxlength="99" />
    </el-form-item>
    <el-form-item label="标签名">
      <el-input v-model="configInfo.label" maxlength="99"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="configInfo.value" maxlength="99" />
    </el-form-item>
    <el-form-item label="提示信息">
      <el-input v-model="configInfo.toolTip" maxlength="99"></el-input>
    </el-form-item>
    <el-divider content-position="center">属性配置</el-divider>
    <el-form-item label="选项数据">
      <el-radio-group v-model="configInfo.remote">
        <el-radio-button label="json">JSON数据</el-radio-button>
        <el-radio-button label="api">接口数据</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-button style="width:100%;" v-if="configInfo.remote == 'json'">编辑数据</el-button>
    <el-form-item v-else>
      <div style="padding:10px;background-color:#bfdaf7;width:100%" class="api-form">
        <el-form label-position="left" :model="configInfo.remoteSetting">
          <el-form-item label="接口:" label-width="80px"
            :rules="{ required: true, message: '请输入接口地址', tragger: ['blur', 'change'] }" prop="url">
            <el-input :model-value="configInfo.remoteSetting.url"
              @input="(value: string) => configInfo.remoteSetting.url = value"></el-input>
          </el-form-item>
          <el-form-item label="请求方式:" label-width="80px">
            <el-select>
              <el-option label="GET" value="GET"></el-option>
              <el-option label="POST" value="POST"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="附带参数:" label-width="80px">
            <el-button @click="showParams = true">编辑数据</el-button>
          </el-form-item>
          <el-form-item label="header信息:" label-width="80px">
            <el-button @click="showHeader = true">编辑数据</el-button>
          </el-form-item>
          <el-form-item label-width="80px" prop="parseFunction" :rules="[]">
            <template #label>
              <el-tooltip effect="dark" content="解析接口数据，返回组件所需的数据结构" placement="top">
                <el-icon>
                  <Warning />
                </el-icon>
              </el-tooltip>
              解析函数:
            </template>
            <el-input type="textarea" :rows="5" v-model="configInfo.remoteSetting.parseFunction"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-form-item>
    <el-form-item label="是否必填">
      <el-switch v-model="configInfo.required" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="configInfo.props.disabled" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否可多选">
      <el-switch v-model="configInfo.props.props.multiple" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否显示清除按钮">
      <el-switch v-model="configInfo.props.clearable" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="是否可筛选">
      <el-switch v-model="configInfo.props.filterable" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="占位内容">
      <el-input v-model="configInfo.props.placeholder" maxlength="99" />
    </el-form-item>
    <el-form-item label="输入框中是否显示选中值的完整路径">
      <el-switch v-model="configInfo.props.showAllLevels" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="多选模式下是否折叠Tag">
      <el-switch v-model="configInfo.props.collapseTags" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签">
      <el-switch v-model="configInfo.props.collapseTagsTooltip" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="标签的类型">
      <el-select v-model="configInfo.props.tagType">
        <el-option v-for="item in [{ label: 'success', value: 'success' },
        { label: 'info', value: 'info' },
        { label: 'warning', value: 'warning' },
        { label: 'danger', value: 'danger' },]" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="次级菜单的展开方式">
      <el-select v-model="configInfo.props.props.expandTrigger">
        <el-option v-for="item in [{ label: 'click', value: 'click' },
        { label: 'hover', value: 'hover' },]" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="是否返回由该节点所在的各级菜单的值所组成的数组">
      <el-switch v-model="configInfo.props.props.emitPath" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="用于分隔选项的字符">
      <el-input v-model="configInfo.props.separator" maxlength="5"></el-input>
    </el-form-item>
    <el-form-item label="指定选项的值为选项对象的某个属性值">
      <el-input v-model="configInfo.props.props.value" maxlength="99"></el-input>
    </el-form-item>
    <el-form-item label="指定选项标签为选项对象的某个属性值">
      <el-input v-model="configInfo.props.props.label" maxlength="99"></el-input>
    </el-form-item>
    <el-form-item label="指定选项的子选项为选项对象的某个属性值">
      <el-input v-model="configInfo.props.props.children" maxlength="99"></el-input>
    </el-form-item>
    <el-dialog v-model="showParams" title="附加数据">
      <codemirror ref="codeParamsRef" :code="configInfo.remoteSetting.params"></codemirror>
      <template #footer>
        <el-button @click="showParams = false">取消</el-button>
        <el-button @click="exportParamsData" type="primary">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showHeader" title="header信息">
      <codemirror ref="codeHeaderRef" :code="configInfo.remoteSetting.header"></codemirror>
      <template #footer>
        <el-button @click="showHeader = false">取消</el-button>
        <el-button @click="exportHeaderData" type="primary">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<style scoped lang="scss">
.api-form {
  :deep(.el-form-item) {
    margin-bottom: 18px;
  }

  :deep(.el-form-item__label) {
    float: left;
  }
}
</style>
