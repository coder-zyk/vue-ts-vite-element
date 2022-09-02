/**组件列表 */
const components = [
  {
    type: "input",
    title: "单行文本",
    field: "text",
    value: "text",
    col: {
      span: 12,
      labelWidth: 80
    },
    props: {
      type: "text",
    },
    validate: [],
  },
  {
    type: "input",
    title: "多行文本",
    field: "textarea",
    value: "textarea",
    col: {
      span: 12,
      labelWidth: 150
    },
    props: {
      type: "textarea",
    },
    validate: [],
  },

]

export { components }