<script setup lang="ts">
console.log( [1, 2, 3, 6, 4, 5, 8, 7, 5, 3, 4].reduce((pre: Array<any>, current) => {
  return pre.some((item) => item == current) ? pre : [...pre, current];
}, []));
</script>
<template></template>
<style scoped lang="scss"></style>
