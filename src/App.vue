<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/navbar/index.vue";
let socket = new WebSocket("ws:192.168.1.2:1234");
socket.onopen = () => {
  socket.send(
    JSON.stringify({
      code: 5,
      userId: "admin",
    })
  );
};
socket.onmessage = ({ data }) => {
  console.log(data);
};
</script>

<template>
  <el-container class="zyk-container">
    <el-header class="zyk-header">
      <Navbar></Navbar>
    </el-header>
    <el-main class="zyk-main">
      <RouterView />
    </el-main>
    <el-footer class="zyk-footer">
      <el-link href="https://beian.miit.gov.cn/" target="_blank"
        >蜀ICP备2022002176号</el-link
      >
    </el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.zyk-container {
  height: 100%;
  width: 100%;

  .zyk-header {
    position: absolute;
    top: 0px;
    // height: 64px;
    width: 100%;
  }

  .zyk-main {
    position: absolute;
    top: 60px;
    bottom: 30px;
    width: 100%;
  }

  .zyk-footer {
    position: absolute;
    height: 30px;
    top: unset;
    bottom: 0px;
    width: 100%;
    text-align: center;
  }
}
</style>
