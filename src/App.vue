<template>
  <div id="app">
    <Top ref="Top" />
    <div class="mid-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Top from "@/views/Top.vue";

export default {
  name: "app",
  components: {
    Top
  },
  created() {}
};
</script>

<style>
#app {
  height: 100%;
  font-family: "Comic Sans MS";
}
.mid-content {
  width: 100%;
  height: calc(100% - 60px);
}
</style>
