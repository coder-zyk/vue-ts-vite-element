<script setup lang='ts'>
import type { FormItem } from '@/views/form';
import { Warning } from '@element-plus/icons-vue'
const props = defineProps(['formItemInfo', 'model'])
const formItem: FormItem = props.formItemInfo
/**数据实体 */
const model = props.model
</script>
<template>
  <div v-if="['space', 'divider'].includes(formItem.type)">
    <div :style="`height:${formItem.props.height}px;width:100%`"></div>
    <el-divider v-if="formItem.type === 'divider'" :content-position="formItem.props.contentPosition"
      :direction="formItem.props.direction">{{ formItem.value }}</el-divider>
  </div>
  <el-form-item :label-width="formItem.label === '' ? '0px' : ''"
    :style="`margin-bottom:${formItem.type == 'text' ? '0px' : undefined}`"
    :rules="[{ required: formItem.required, trigger: 'blur', message: `${formItem.label}必填` }]" :prop="formItem.field"
    v-else>
    <template #label>
      <div style="display: flex;align-items: center">
        <el-tooltip effect="dark" :content="formItem.toolTip" placement="top"
          v-if="formItem.toolTip && formItem.toolTip != ''">
          <el-icon>
            <Warning />
          </el-icon>
        </el-tooltip>
        {{ formItem.label }}
      </div>

    </template>
    <!-- 文本 -->
    <span v-if="formItem.type === 'text'"
      :style="`display:grid;width:100%;line-height:${formItem.props.fontSize + 15}px;justify-content:${formItem.props.justify};color:${formItem.props.color};font-size:${formItem.props.fontSize}px`">
      {{ formItem.value }}
    </span>
    <!-- 单行输入 -->
    <el-input v-if="formItem.type === 'input'" v-model="model[formItem.field]" :type="formItem.props.type"
      :clearable="formItem.props.clearable" :disabled="formItem.props.disabled" :rows="formItem.props.rows"
      :placeholder="formItem.props.placeholder" :resize="formItem.props.resize" :autocomplete="formItem.props.resize"
      :autofocus="formItem.props.autofocus" :show-password="formItem.props.showPassword"
      :minlength="formItem.props.minlength" :maxlength="formItem.props.maxlength"
      :show-word-limit="formItem.props.showWordLimit"></el-input>
    <!-- 数字输入 -->
    <el-input-number v-if="formItem.type === 'number'" v-model="model[formItem.field]"
      :placeholder="formItem.props.placeholder" :controls="formItem.props.controls"
      :controls-position="formItem.props.controlsPosition" :step="formItem.props.step"
      :step-strictly="formItem.props.stepStrictly" :min="formItem.props.min" :max="formItem.props.max"
      :precision="formItem.props.precision">
    </el-input-number>
    <!-- 单选框 -->
    <el-radio-group v-if="formItem.type === 'radio'" v-model="model[formItem.field]"
      :placeholder="formItem.props.placeholder" :text-color="formItem.props.textColor" :fill="formItem.props.fill"
      :disabled="formItem.props.disabled">
      <div v-if="formItem.props.isButton">
        <el-radio-button v-for="item in formItem.data" :label="item.label" :value="item.value">
        </el-radio-button>
      </div>
      <div v-else>
        <el-radio v-for="item in formItem.data" :label="item.label" :value="item.value" :border="formItem.props.border">
        </el-radio>
      </div>
    </el-radio-group>
    <!-- 多选框 -->
    <el-checkbox-group v-if="formItem.type === 'checkbox'" v-model="model[formItem.field]"
      :placeholder="formItem.props.placeholder" :text-color="formItem.props.textColor" :fill="formItem.props.fill"
      :disabled="formItem.props.disabled" :max="formItem.props.max" :min="formItem.props.min">
      <div v-if="formItem.props.isButton">
        <el-checkbox-button v-for="item in formItem.data" :label="item.label" :value="item.value">
        </el-checkbox-button>
      </div>
      <div v-else>
        <el-checkbox v-for="item in formItem.data" :label="item.label" :border="formItem.props.border">
        </el-checkbox>
      </div>
    </el-checkbox-group>
    <!-- 选择框 -->
    <el-select v-if="formItem.type === 'select'" v-model="model[formItem.field]"
      :placeholder="formItem.props.placeholder" :multiple="formItem.props.multiple" :disabled="formItem.props.disabled"
      :clearable="formItem.props.clearable" :collapse-tags="formItem.props.collapseTags"
      :multiple-limit="formItem.props.multipleLimit" :no-data-text="formItem.props.noDataText"
      :no-match-text="formItem.props.noMatchText" :filterable="formItem.props.filterable" style="width: 100%;"
      collapse-tags-tooltip>
      <el-option v-for="item in formItem.data" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <!-- 日期选择器 -->
    <el-date-picker v-if="formItem.type === 'date'" v-model="model[formItem.field]" :type="formItem.props.type"
      :format="formItem.props.format" :placeholder="formItem.props.placeholder" :editable="formItem.props.editable"
      :end-placeholder="formItem.props.endPlaceholder" :start-placeholder="formItem.props.startPlaceholder"
      :clearable="formItem.props.clearable" :value-format="formItem.props.valueFormat"
      :disabled="formItem.props.disabled" :range-separator="formItem.props.rangeSeparator"
      :unlink-panels="formItem.props.unlinkPanels" />
    <!-- 时间选择器 -->
    <el-time-picker v-if="formItem.type === 'time'" v-model="model[formItem.field]"
      :placeholder="formItem.props.placeholder" :editable="formItem.props.editable"
      :end-placeholder="formItem.props.endPlaceholder" :start-placeholder="formItem.props.startPlaceholder"
      :clearable="formItem.props.clearable" :disabled="formItem.props.disabled" :is-range="formItem.props.isRange"
      :arrow-control="formItem.props.arrowControl" />
    <!-- 颜色选择器 -->
    <el-color-picker v-if="formItem.type === 'color'" v-model="model[formItem.field]"
      :disabled="formItem.props.disabled" :show-alpha="formItem.props.showAlpha" />
    <!-- 开关 -->
    <el-switch v-if="formItem.type === 'switch'" v-model="model[formItem.field]"
      :active-text="formItem.props.activeText" :inactive-text="formItem.props.inactiveText"
      :active-value="formItem.props.activeValue" :inactive-value="formItem.props.inactiveValue"
      :disabled="formItem.props.disabled" :inline-prompt="formItem.props.inlinePrompt" />
    <!--评分-->
    <el-rate v-if="formItem.type === 'rate'" v-model="model[formItem.field]" :disabled="formItem.props.disabled"
      :allow-half="formItem.props.allowHalf" :max="formItem.props.max" :void-color="formItem.props.voidColor"
      :show-score="formItem.props.showScore" />
    <!-- 滑块 -->
    <el-slider v-if="formItem.type === 'slider'" v-model="model[formItem.field]" :max="formItem.props.max"
      :min="formItem.props.min" :show-input="formItem.props.showInput"
      :show-input-controls="formItem.props.showInputControls" :show-stops="formItem.props.showStops"
      :height="formItem.props.height" :step="formItem.props.step" :vertical="formItem.props.vertical"
      :range="formItem.props.range" />
  </el-form-item>
</template>
<style scoped lang='scss'>

</style>