import type { InputProps, RadioProps, CheckboxProps, ElDatePicker, ElSelect, ElColorPicker, SwitchProps, ElRate, InputNumberProps, RowProps, ColProps } from 'element-plus';
/**表单信息 */
interface FormInfo {
  id: number,
  config: FormConfig,
  list: Array<FormItem>
}
/**表单配置 */
interface FormConfig {
  name: string,
  labelWidth: number,
  labelPosition: 'right'|'top'|'left',
  labelSize: 'small'|'default'|'large',
  dbName: {
    name: string,
    dbId: number,
  }
}
/**输入框的props */
type DatePickerProps = InstanceType<typeof ElDatePicker>['$props']
type SelectProps = InstanceType<typeof ElSelect>['$props']
type ColorPickerProps = InstanceType<typeof ElColorPicker>['$props']
type RateProps = InstanceType<typeof ElRate>['$props']
/**组件信息 */
interface FormItem {
  /**组件的label */
  title: string,
  /**组件的唯一标识 */
  id: string,
  /**组件的类型 */
  type: string,
  /**组件的字段 */
  field: string,
  /**组件的值 */
  value: string | number | Array<any> | boolean
  /**组件的props */
  props: FormItemProps,
  /**组件验证规则 */
  validate?: Array<any>
  /**栅格布局 */
  col?: any
}
type OptionProp = { height?: string, width?: string, position?: string, fontSize?: string, options?: Array<any>, list?: Array<any> }
/**组件的具体配置 */
type FormItemProps = OptionProp | InputProps | InputNumberProps | DatePickerProps | ColorPickerProps | SelectProps | SwitchProps | RowProps | ColProps | CheckboxProps | RadioProps | RateProps | any
const formBaseItems: Array<FormItem> = [
  {
    type: 'text',
    id: 'id',
    title: '文本',
    field: 'text',
    value: 'text',
    props: {
      height: '',
      width: '100%',
      position: 'left',
      textColor: 'red',
    }
  },
  {
    type: 'input',
    id: 'id',
    title: '单行输入',
    field: 'input',
    value: '',
    props: {

    }
  },
  {
    type: 'textarea',
    id: 'id',
    title: '多行输入',
    field: 'textarea',
    value: 'textarea',
    props: {}
  },
  {
    type: 'number',
    id: 'id',
    title: '数字输入',
    field: 'number',
    value: 1,
    props: {}
  },
  {
    type: 'radio',
    id: 'id',
    title: '单选框',
    field: 'radio',
    value: '选项1',
    props: {
      options: [{
        label: '选项1',
        value: '选项1'
      },
      {
        label: '选项2',
        value: '选项2'
      }, {
        label: '选项3',
        value: '选项3'
      }]
    }
  },
  {
    type: 'checkbox',
    id: 'id',
    title: '多选框',
    field: 'checkbox',
    value: [],
    props: {
      options: [
        {
          label: '选项1',
        }, {
          label: '选项2',
        },
        {
          label: '选项3',
        }
      ]
    }
  },
  {
    type: 'select',
    id: 'id',
    title: '选择框',
    field: 'select',
    value: '',
    props: {
      options: [{
        label: '选项1',
        value: '选项1'
      },
      {
        label: '选项2',
        value: '选项2'
      }, {
        label: '选项3',
        value: '选项3'
      }]
    }
  },
  {
    type: 'datetime',
    id: 'id',
    title: '时间选择器',
    field: 'datetime',
    value: '',
    props: {
      disabled: false,
      placeholder: '',
      format: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  {
    type: 'date',
    id: 'id',
    title: '日期选择器',
    field: 'date',
    value: '',
    props: {
      disabled: false,
      placeholder: '',
      format: 'YYYY-MM-DD'
    }
  },
  {
    type: 'rate',
    id: 'id',
    title: '评分',
    field: 'rate',
    value: 0,
    props: {
      disabled: false,
    }
  },
  {
    type: 'color',
    id: 'id',
    title: '颜色选择器',
    field: 'color',
    value: '',
    props: {
      disabled: false,
    }
  },
  {
    type: 'switch',
    id: 'id',
    title: '开关',
    field: 'switch',
    value: false,
    props: {
      disabled: false,
    }
  },
  {
    type: 'slider',
    id: 'id',
    title: '滑块',
    field: 'slider',
    value: 0,
    props: {

    }
  }
]
const formAdvancedItems: Array<FormItem> = [
  {
    type: 'blank',
    id: 'id',
    title: '自定义',
    field: 'blank',
    value: '',
    props: {
    }
  },
  {
    type: 'imgupload',
    id: 'id',
    title: '图片',
    field: 'imgupload',
    value: '',
    props: {
    }
  },
  {
    type: 'editor',
    id: 'id',
    title: '编辑器',
    field: 'editor',
    value: '',
    props: {

    }
  },
  {
    type: 'cascader',
    id: 'id',
    title: '级联选择器',
    field: 'cascader',
    value: '',
    props: {
    }
  }
]
const formLayoutItems: Array<FormItem> = [
  {
    type: 'row',
    id: 'id',
    title: '栅格布局',
    field: 'row',
    value: '',
    props: {
    }
  }
]
export { type FormInfo, type FormItem, type FormConfig, formBaseItems, formAdvancedItems, formLayoutItems }