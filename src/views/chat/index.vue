<script setup lang="ts">
console.log(
  [1, 2, 3, 6, 4, ,23,5,2,1,5,6,78,9,8,5, 8, 7, 5, 3, 4].reduce((pre: Array<any>, current) => {
    return pre.some((item) => item == current) ? pre : [...pre, current];
  }, [])
);
</script>
<template></template>
<style scoped lang="scss"></style>
