<script setup lang='ts'>
import { EditorView, basicSetup, } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { nextTick, onMounted, ref, watch, type Ref } from "vue";
import { EditorState, Text, Compartment } from "@codemirror/state";
const props = defineProps({
  /**编辑器的高度 */
  height: {
    type: [Number, String],
    default: '400px'
  },
  /**编辑器的内容 */
  code: {
    type: String,
    default: '',
  }
})

const editorRef = ref<HTMLElement>()
let view: EditorView;
let state;
onMounted(() => {
  state = EditorState.create({
    extensions: [basicSetup, javascript(),
      (new Compartment).of(EditorState.tabSize.of(2))
    ],
    doc: Text.of(JSON.parse(props.code) as readonly string[]),
  })
  view = new EditorView({
    state: state,
    parent: editorRef.value,
  })
  view.dom.style.height = ((typeof props.height) == 'number' ? `${props.height}px` : props.height) as string
})
watch(() => props.code, (value) => {
  if (value.length > 0) {
    view.setState(EditorState.create({
      extensions: [basicSetup, javascript(),
        (new Compartment).of(EditorState.tabSize.of(2))],
      doc: Text.of(JSON.parse(value) as readonly string[]),
    }))
  }
})
/**导出编辑器的数据 */
function exportData() {
  return JSON.stringify(view.state.doc)
}
defineExpose({
  exportData
})

</script>
<template>
  <div ref="editorRef" class="editor">
  </div>
</template>
<style scoped lang='scss'>
/**代码编辑器的 */
.editor {

  /**修复codemirror光标位置不正确 */
  :deep(.cm-cursorLayer) {
    position: absolute;
  }

  :deep(.cm-selectionLayer) {
    position: unset;
  }

  :deep(.cm-focused) {
    outline: unset;
  }
}
</style>