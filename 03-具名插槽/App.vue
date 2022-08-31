<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>

      <my-pannel title="芙蓉楼">
        <template v-slot:default>
          <p>床前明月光,</p>
          <p>疑是地上霜</p>
          <p>举头望明月，</p>
          <p>低头思故乡。</p>
        </template>
      </my-pannel>

      <my-pannel title="静夜思">
        <p>床前明月光,</p>
        <p>疑是地上霜</p>
        <p>举头望明月，</p>
        <p>低头思故乡。</p>
        <template v-slot:comment>
          <p>李白很ok</p>
        </template>
      </my-pannel>
    </div>
  </div>
</template>

<script>
//具名插槽
//  - 给插槽起名字
//  父级的内容 写在组件标签里面
// <template v-slot:comment>
//   <p>李白很ok</p>
// </template>
//  1. <slot name = "名字">子级</slot>
import MyPannel from "./components/MyPannel";
export default {
  components: {
    MyPannel,
  },
  data(){
    return {
      
    }
  }
};
</script>
