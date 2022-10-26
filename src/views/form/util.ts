import { inputProps } from "element-plus"
import type { InputFormItem, RadioFormItem, InputNumberFormItem, CheckboxFormItem, SelectFormItem, DateFormItem, TimeFormItem } from "."

class Maker {
  /**索引签名
   */
  [index: string]: any

  /**文本 */
  text(): any {
    return {
      type: 'text',
      id: 'text',
      title: '文本',
      field: 'text',
      value: 'text',
      props: {
        height: '50px',
        width: '100%',
        position: 'left',
        textColor: 'red',
      }
    }
  }
  /**单行输入框 */
  input(): InputFormItem {
    return {
      type: 'input',
      id: 'input',
      title: '单行输入',
      field: 'input',
      value: '',
      required: false,
      props: {
        maxlength: 999,
        minlength: 0,
        rows: 3,
        type: 'text',
        autocomplete: 'off',
        autofocus: false,
        autosize: false,
        showPassword: false,
        showWordLimit: false,
        placeholder: '',
        readonly: false,
        resize: 'none',
        clearable: false,
        disabled: false
      },
    }
  }

  /**数字输入框 */
  number(): InputNumberFormItem {
    return {
      type: 'number',
      id: 'number',
      title: '数字输入',
      field: 'number',
      value: 1,
      required: false,
      props: {
        min: 1,
        max: 999,
        step: 1,
        stepStrictly: false,
        readonly: false,
        placeholder: '',
        precision: 0,
        disabled: false,
        controls: true,
        controlsPosition: ''
      }
    }
  }
  /**单选框 */
  radio(): RadioFormItem {
    return {
      type: 'radio',
      id: 'radio',
      title: '单选框',
      field: 'radio',
      value: '',
      remote: false,
      required: false,
      props: {
        label: '',
        disabled: false,
        textColor: '',
        border: false,
        isButton: false,
        fill: ''
      },
      data: [{
        label: '选项1',
        value: 1
      },
      {
        label: '选项2',
        value: 2
      }]
    }
  }
  /**多选框 */
  checkbox(): CheckboxFormItem {
    return {
      type: 'checkbox',
      id: 'checkbox',
      title: '多选框',
      field: 'checkbox',
      value: [],
      required: false,
      props: {
        label: '',
        disabled: false,
        textColor: '',
        border: false,
        isButton: false,
        fill: '',
        max: 999,
        min: 0
      },
      remote: false,
      data: [{
        label: '选项1',
        value: 1
      },
      {
        label: '选项2',
        value: 2
      }]
    }
  }
  /**选择框 */
  select(): SelectFormItem {
    return {
      type: 'select',
      id: 'select',
      title: '选择框',
      field: 'select',
      value: [],
      remote: false,
      required: false,
      data: [{
        label: '选项1',
        value: 1
      }, {
        label: '选项2',
        value: 2
      }],
      props: {
        multiple: false,
        multipleLimit: 0,
        disabled: false,
        noDataText: '',
        noMatchText: '',
        clearable: false,
        collapseTags: false,
        allowCreate: false,
        placeholder: '',
        filterable: false
      }
    }
  }
  /**时间选择 */
  time(): TimeFormItem {
    return {
      type: 'time',
      id: 'time',
      title: '时间选择器',
      field: 'time',
      value: '',
      required: false,
      props: {
        disabled: false,
        placeholder: '',
        isRange: false,
        endPlaceholder: '',
        startPlaceholder: '',
        clearable: false,
        arrowControl: true,
        editable: false,
      }
    }
  }
  /**日期选择 */
  datetime(): DateFormItem {
    return {
      type: 'datetime',
      id: 'datetime',
      title: '日期选择器',
      field: 'datetime',
      value: '',
      required: false,
      props: {
        disabled: false,
        startPlaceholder: '',
        editable: false,
        endPlaceholder: '',
        placeholder: '',
        format: 'YYYY-MM-DD hh:ss:mm',
        type: 'date',
        valueFormat: '',
        rangeSeparator: '-',
        unlinkPanels: false,
        clearable: false,
      }
    }
  }
  /**评分 */
  rate(): any {
    return {
      type: 'rate',
      id: 'rate',
      title: '评分',
      field: 'rate',
      value: 0,
      props: {
        disabled: false,
      }
    }
  }
  /**颜色选择 */
  color(): any {
    return {
      type: 'color',
      id: 'color',
      title: '颜色选择器',
      field: 'color',
      value: '',
      props: {
        disabled: false,
      }
    }
  }
  /**开关 */
  switch(): any {
    return {
      type: 'switch',
      id: 'switch',
      title: '开关',
      field: 'switch',
      value: false,
      props: {
        disabled: false,
      }
    }
  }
  /**滑块 */
  slider(): any {
    return {
      type: 'slider',
      id: 'slider',
      title: '滑块',
      field: 'slider',
      value: 0,
      props: {
      }
    }
  }
  /**级联选择 */
  cascader(): any {
    return {
      type: 'cascader',
      id: 'cascader',
      title: '级联选择器',
      field: 'cascader',
      value: '',
      props: {
      }
    }
  }
  /**栅格 */
  row(): any {
    return {
      type: 'row',
      id: 'row',
      title: '栅格布局',
      field: 'row',
      value: '',
      props: {
        gutter: 10,
        justify: 'center',
        align: 'top',
        list: [
        ]
      }
    }
  }
  col(): any {
    return {
      type: 'col',
      id: 'col',
      title: '',
      field: 'col',
      value: '',
      props: {
        span: 12,
        list: []
      }
    }
  }
}
/**创建各种组件 */
const maker = new Maker()
export { maker }