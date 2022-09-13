<script setup lang="ts">
import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import { nextTick, onMounted, ref, markRaw } from "vue";
const bpmnStr = ref(`<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn2:process id="Process_1" isExecutable="true">
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`);
const flowRef = ref();

// BpmnJS is the BPMN viewer instance
nextTick(() => {
  const bpmnInstance = new BpmnModeler({
    container: flowRef.value,
    keyboard: {
      bindTo: flowRef.value,
    },
  });

  try {
    // we did well!
    // import a BPMN 2.0 diagram
    bpmnInstance
      .importXML(bpmnStr.value)
      .then((res: any) => {
        console.log(res, "成功");
      })
      .catch((error: any) => {
        console.log(error, "错误");
      })
      .finally(() => {
        console.log("最后");
      });
    bpmnInstance.on("selection.changed", (event: any) => {
      console.log(event);
    });
  } catch (err) {
    // import failed :-(
  }
});
</script>

<template>
  <div id="flow" ref="flowRef" class="zyk-flow"></div>
</template>

<style scoped lang="scss">
.zyk-flow {
  height: 100%;
  width: 100%;
  :deep(a) {
    display: none;
  }
}
</style>
