<script setup lang="ts">
import {
  init,
  registerMap,
  graphic,
  type EChartsType,
  type EChartsOption,
} from "echarts";
import { onMounted, ref } from "vue";
import china_geo from "./china.json";
import 四川省 from "./四川省.json";
const echartsRef = ref();
let myChart: EChartsType;
function randomData() {
  let arr: number[] = [];
  for (let index = 0; index < 10000; index++) {
    arr.push(Math.floor(Math.random() * 500));
  }
  return arr;
}
let option: EChartsOption = {
  tooltip: {
    show:false,
    trigger: "axis",
  },
  animation: false,
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      restore: {},
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    type: "value",
  },
  dataZoom: [
    {
      type: "inside",
    },
  ],
  series: [
    {
      name: "Fake Data",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: {
        color: "rgb(255, 70, 131)",
      },
      data: randomData(),
    },
  ],
};
onMounted(() => {
  myChart = init(echartsRef.value);
  myChart.setOption(option);

  // setInterval(() => {
  //   option.series = [
  //   {
  //     name: "Fake Data",
  //     type: "line",
  //     symbol: "none",
  //     sampling: "lttb",
  //     itemStyle: {
  //       color: "rgb(255, 70, 131)",
  //     },
  //     areaStyle: {
  //       color: new graphic.LinearGradient(0, 0, 0, 1, [
  //         {
  //           offset: 0,
  //           color: "rgb(255, 158, 68)",
  //         },
  //         {
  //           offset: 1,
  //           color: "rgb(255, 70, 131)",
  //         },
  //       ]),
  //     },
  //     data: randomData(),
  //   },
  // ];
  //   myChart.setOption(option);
  // }, 100);
});
</script>
<template>
  <div ref="echartsRef" class="echarts-container"></div>
</template>
<style scoped lang="scss">
.echarts-container {
  height: 100%;
  width: 100%;
}
</style>
