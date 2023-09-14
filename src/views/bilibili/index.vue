<script setup lang="ts">
import { onMounted, ref } from "vue";

const biliRef = ref<HTMLIFrameElement>();
onMounted(() => {
  biliRef.value!.onload = (event) => {
    // console.log(event);
  };
  window.open = (url, target) => {
    console.log(url, target);
  };
});
</script>
<template>
  <iframe
    src="https://www.bilibili.com/video/BV1aP4y1o7n1/"
    frameborder="0"
    ref="biliRef"
    style="width: 100%; height: 100%"
    sandbox="allow-storage-access-by-user-activation allow-forms allow-scripts allow-same-origin allow-popups"
  ></iframe>
</template>
<style scoped lang="scss"></style>
