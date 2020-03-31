<template>
  <div>
    <input v-model="hello" />
    <p>hello: {{ hello }}</p>
    <p>computed: {{ computedMsg }}</p>
    <button @click="greet">Hello TS</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";

@Component
class MixinsDemo extends Vue {
  typescript = "Typescript";
}

@Component
export default class TS extends mixins(MixinsDemo) {
  // 初始化数据
  hello = "Hello";
  // 声明周期钩子
  mounted() {}
  // 计算属性
  get computedMsg() {
    return `computed ${this.hello} ${this.typescript}`;
  }
  // 方法
  greet() {
    alert(`greeting ${this.hello} ${this.typescript}`);
  }
}
</script>
