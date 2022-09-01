<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <slot name="head"></slot>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="(item) in goodsList" :key="item.id">
      <slot name="bodyli" :good="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyTable",
  props:{
    goodsList:{
      type:Array,
      require:true
    }
  }
};
</script>

<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
