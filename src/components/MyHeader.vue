<template>
  <div class="my-header" :style="{ background }">{{ title }}</div>
</template>

<script>
export default {
  // props对象形式
  props: {
    title: {
      type: String,
      default: "",
    },
    background: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
