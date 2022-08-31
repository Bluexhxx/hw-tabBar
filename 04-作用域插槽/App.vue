<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>

      <my-pannel title="芙蓉楼">
        <template #default>
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
        <template #comment="{ tip1, tip2 }">
          <i>{{ tip1 }}</i> <br/>
          <i>{{ tip2 }}</i>
          <p>李白很ok</p>
        </template>
      </my-pannel>
    </div>
  </div>
</template>

<script>
//作用域插槽
//  --插槽 用于 子组件的结构不想写死 ，让父组件传过来

// 作用域插槽，子组件结构不想写死,让父组件传过来，同时子组件给父组件一些提示

// 子组件里的slot标签呢可以声明多个变量内容 传递给父组件的v-slot 提示是一个对象
//  可以直接解构使用
import MyPannel from "./components/MyPannel";
export default {
  components: {
    MyPannel,
  },
  data() {
    return {};
  },
};
</script>
