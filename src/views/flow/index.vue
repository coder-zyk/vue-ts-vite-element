<script setup lang='ts'>
import codemirror from '@/views/form/components/codemirror/index.vue'
import { nextTick, onMounted, ref } from 'vue';
const codeRef = ref()
function exportData() {
  console.log(JSON.stringify(codeRef.value.exportData()))
}
const code = ref([''])
nextTick(() => {
  setTimeout(() => {
    exportData()
    code.value = ["[", "  {", "    name:123,", "    age:18", "  }", "]"]
  }, 1000);
})


</script>
<template>
  <codemirror ref="codeRef" :value="code"></codemirror>
</template>
<style scoped lang='scss'>

</style>