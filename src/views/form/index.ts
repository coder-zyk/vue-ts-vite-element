/**表单信息 */
interface FormInfo {
  id: number|string,
  config: FormConfig,
  list: Array<FormItem>
}
/**表单配置 */
interface FormConfig {
  name: string,
  labelWidth: number,
  labelPosition: 'right' | 'top' | 'left',
  size: 'small' | 'default' | 'large',
  dbName: {
    name: string,
    dbId: number,
  }
}
/**组件信息 */
interface FormItem {
  [key: string]: any
  /**组件的label */
  label: string,
  /**组件的唯一标识 */
  id: string,
  /**组件的类型 */
  type: string,
  /**组件的字段 */
  field: string,
  /**是否必填 */
  required: boolean,
  /**组件的值 */
  value: any
  /**组件验证规则 */
  validate?: Array<any>
  /**栅格布局 */
  row?: any,
  /**参数 */
  props?: any
}
/**文本配置 */
interface TextFormItem extends FormItem {
  props: {
    height: string,
    justify: string,
    color: string,
    fontSize: number,
  }
}
/**输入框配置 */
interface InputFormItem extends FormItem {
  props: {
    type: 'text' | 'textarea' | 'number' | 'password',
    maxlength: number,
    minlength: number,
    autofocus: boolean,
    showWordLimit: boolean,
    placeholder: string,
    clearable: boolean,
    showPassword: boolean,
    disabled: boolean,
    rows: number,
    autosize: boolean,
    autocomplete: string,
    readonly: boolean,
    resize: 'none' | 'both' | 'horizontal' | 'vertical'
  }

}
/**数字输入框配置 */
interface InputNumberFormItem extends FormItem {
  props: {
    min: number,
    max: number,
    step: number,
    stepStrictly: boolean,
    precision: number,
    readonly: boolean,
    disabled: boolean,
    controls: boolean,
    controlsPosition: 'right' | '',
    placeholder: string,
  }
}
/**单选框配置 */
interface RadioFormItem extends FormItem {
  remote: boolean,
  data: Array<any>
  props: {
    disabled: boolean,
    textColor: string,
    fill: string,
    border: boolean,
    label: string | number | boolean,
    isButton: boolean
  }
}
/**多选框配置 */
interface CheckboxFormItem extends FormItem {
  remote: boolean,
  data: Array<any>
  props: {
    disabled: boolean,
    textColor: string,
    fill: string,
    border: boolean,
    min: number,
    max: number,
    label: string | number | boolean,
    isButton: boolean,
  }
}
/**下拉选择框配置 */
interface SelectFormItem extends FormItem {
  remote: boolean,
  data: Array<any>
  props: {
    multiple: boolean,
    disabled: boolean,
    clearable: boolean,
    multipleLimit: number,
    placeholder: string,
    filterable: boolean,
    allowCreate: boolean,
    noMatchText: string,
    noDataText: string,
    collapseTags: boolean
  }
}
/**日期选择器配置 */
interface DateFormItem extends FormItem {
  props: {
    disabled: boolean,
    placeholder: string,
    clearable: boolean,
    type: string,
    format: string,
    valueFormat: string,
    editable: boolean,
    startPlaceholder: string,
    endPlaceholder: string,
    rangeSeparator: string,
    unlinkPanels: boolean,
  }
}
/**时间选择器配置 */
interface TimeFormItem extends FormItem {
  props: {
    disabled: boolean,
    placeholder: string,
    clearable: boolean,
    editable: boolean,
    startPlaceholder: string,
    endPlaceholder: string,
    isRange: boolean,
    arrowControl: boolean
  }
}
/**颜色选择器配置 */
interface ColorPickerFormItem extends FormItem {
  props: {
    disabled: boolean,
    showAlpha: boolean,
  }
}
/**开关配置 */
interface SwitchFormItem extends FormItem {
  props: {
    disabled: boolean,
    activeText: string,
    inactiveText: string,
    activeValue: any,
    inactiveValue: any,
    inlinePrompt: boolean
  }
}
/**评分配置 */
interface RateFormItem extends FormItem {
  props: {
    disabled: boolean,
    max: number,
    allowHalf: boolean,
    voidColor: string,
    showScore: boolean
  }
}
/**滑块配置 */
interface SliderFormItem extends FormItem {
  props: {
    min: number,
    max: number,
    disabled: boolean,
    step: number,
    showInput: boolean,
    showInputControls: boolean,
    showStops: boolean,
    range: boolean,
    vertical: boolean,
    height: string
  }
}

/**row配置 */
interface RowFormItem extends FormItem {
  props: {
    gutter: number,
    justify: string,
    align: string,
    children: Array<ColFormItem>
  }
}
/**row配置 */
interface ColFormItem extends FormItem {
  props: {
    span: number,
    offset: number,
    push: number,
    pull: number,
    children: Array<FormItem>,
  }
}
/**间隔配置 */
interface SpaceFormItem extends FormItem {
  props: {
   height:number
  }
}
export type {
  FormItem,
  TextFormItem,
  InputFormItem,
  InputNumberFormItem,
  RadioFormItem,
  CheckboxFormItem,
  DateFormItem,
  TimeFormItem,
  SelectFormItem,
  ColorPickerFormItem,
  RateFormItem,
  SliderFormItem,
  SwitchFormItem,
  RowFormItem,
  ColFormItem,
  FormInfo,
  FormConfig,
  SpaceFormItem
}
