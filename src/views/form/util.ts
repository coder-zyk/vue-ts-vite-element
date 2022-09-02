import type { FormItem } from "."

class Maker {
  /**索引签名
   */
  [index: string]: any

  /**文本 */
  text(): FormItem {
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
  input(): FormItem {
    return {
      type: 'input',
      id: 'input',
      title: '单行输入',
      field: 'input',
      value: 'input',
      props: {

      }
    }
  }

  /**多行输入框 */
  textarea(): FormItem {
    return {
      type: 'textarea',
      id: 'textarea',
      title: '多行输入',
      field: 'textarea',
      value: 'textarea',
      props: {}
    }
  }
  /**数字输入框 */
  number(): FormItem {
    return {
      type: 'number',
      id: 'number',
      title: '数字输入',
      field: 'number',
      value: 1,
      props: {}
    }
  }
  /**单选框 */
  radio(): FormItem {
    return {
      type: 'radio',
      id: 'radio',
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
    }
  }
  /**多选框 */
  checkbox(): FormItem {
    return {
      type: 'checkbox',
      id: 'checkbox',
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
    }
  }
  /**选择框 */
  select(): FormItem {
    return {
      type: 'select',
      id: 'select',
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
    }
  }
  /**时间选择 */
  datetime(): FormItem {
    return {
      type: 'datetime',
      id: 'datetime',
      title: '时间选择器',
      field: 'datetime',
      value: '',
      props: {
        disabled: false,
        placeholder: '',
        format: 'YYYY-MM-DD HH:mm:ss'
      }
    }
  }
  /**日期选择 */
  date(): FormItem {
    return {
      type: 'date',
      id: 'date',
      title: '日期选择器',
      field: 'date',
      value: '',
      props: {
        disabled: false,
        placeholder: '',
        format: 'YYYY-MM-DD'
      }
    }
  }
  /**评分 */
  rate(): FormItem {
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
  color(): FormItem {
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
  switch(): FormItem {
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
  slider(): FormItem {
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
  cascader(): FormItem {
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
  row(): FormItem {
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
  col(): FormItem {
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