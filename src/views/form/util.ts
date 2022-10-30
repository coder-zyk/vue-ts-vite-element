import type { TextFormItem, InputFormItem, RadioFormItem, InputNumberFormItem, CheckboxFormItem, SelectFormItem, DateFormItem, TimeFormItem, ColorPickerFormItem, SwitchFormItem, RateFormItem, SliderFormItem, RowFormItem, ColFormItem, SpaceFormItem } from "."

class Maker {
  /**索引签名
   */
  [index: string]: any

  /**文字 */
  text(): TextFormItem {
    return {
      type: 'text',
      id: 'text',
      label: '文字',
      field: 'text',
      value: '这是一段文字',
      required: false,
      props: {
        height: '',
        justify: 'start',
        color: '',
        fontSize: 14
      }
    }
  }
  /**单行输入框 */
  input(): InputFormItem {
    return {
      type: 'input',
      id: 'input',
      label: '单行输入',
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
      label: '数字输入',
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
      label: '单选框',
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
      label: '多选框',
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
      label: '选择框',
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
      label: '时间选择器',
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
  date(): DateFormItem {
    return {
      type: 'date',
      id: 'date',
      label: '日期选择器',
      field: 'date',
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
  rate(): RateFormItem {
    return {
      type: 'rate',
      id: 'rate',
      label: '评分',
      field: 'rate',
      value: 0,
      required: false,
      props: {
        showScore: false,
        disabled: false,
        allowHalf: false,
        max: 5,
        voidColor: '#C6D1DE'
      }
    }
  }
  /**颜色选择 */
  color(): ColorPickerFormItem {
    return {
      type: 'color',
      id: 'color',
      label: '颜色选择器',
      field: 'color',
      value: '',
      required: false,
      props: {
        disabled: false,
        showAlpha: false,
      }
    }
  }
  /**开关 */
  switch(): SwitchFormItem {
    return {
      type: 'switch',
      id: 'switch',
      label: '开关',
      field: 'switch',
      value: true,
      required: false,
      props: {
        disabled: false,
        activeText: '是',
        inactiveText: '否',
        activeValue: 'true',
        inactiveValue: 'false',
        inlinePrompt: false
      }
    }
  }
  /**滑块 */
  slider(): SliderFormItem {
    return {
      type: 'slider',
      id: 'slider',
      label: '滑块',
      field: 'slider',
      required: false,
      value: 0,
      props: {
        disabled: false,
        max: 100,
        min: 0,
        step: 1,
        showInput: false,
        showInputControls: true,
        showStops: false,
        range: false,
        height: '50px',
        vertical: false
      }
    }
  }
  /**级联选择 */
  cascader(): any {
    return {
      type: 'cascader',
      id: 'cascader',
      label: '级联选择器',
      field: 'cascader',
      value: '',
      props: {
      }
    }
  }
  /**栅格 */
  row(): RowFormItem {
    return {
      type: 'row',
      id: 'row',
      label: '',
      field: 'row',
      value: '',
      required: false,
      props: {
        gutter: 10,
        justify: 'start',
        align: 'top',
        children: [
          {
            type: 'col',
            id: `col_${new Date().getTime()}_${(
              Math.random() * 1000000
            ).toFixed(0)}`,
            label: '',
            field: 'col',
            value: '',
            required: false,
            props: {
              span: 12,
              offset: 0,
              pull: 0,
              push: 0,
              children: []
            },
          },
        ]
      }
    }
  }
  col(): ColFormItem {
    return {
      type: 'col',
      id: 'col',
      label: '',
      field: 'col',
      value: '',
      required: false,
      props: {
        pull: 0,
        push: 0,
        offset: 0,
        span: 12,
        children: []
      },
    }
  }
  space(): SpaceFormItem {
    return {
      type: 'space',
      id: 'space',
      label: '',
      field: 'space',
      value: '',
      required: false,
      props: {
        height: 10
      },
    }
  }
}
/**创建各种组件 */
const maker = new Maker()
export { maker }