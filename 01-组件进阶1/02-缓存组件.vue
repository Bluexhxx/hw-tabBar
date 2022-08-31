<template>
  <div>
    <button @click="componentName = 'MyAccount'">显示我的账户</button>
    <button @click="componentName = 'MyInfo'">显示我的信息</button>
    <!-- 使用组件 -->
    <!-- <my-account></my-account>
    <my-info></my-info> -->
    <!-- 动态组件挂载点 -->

    <!-- <keep-alive>
      <component :is="componentName"></component>
    </keep-alive> -->
    <!-- <keep-alive>
      <my-account v-if="componentName == 'MyAccount'"></my-account>
      <my-info v-else></my-info>
    </keep-alive> -->
  </div>
</template>

<script>
import MyAccount from "cpns/MyAccount.vue";
import MyInfo from "cpns/MyInfo.vue";
// <keep-alive>缓存组件</keep-alive>
// <keep-alive>包裹的内容
//  -可开关的组件
//  -v-if v-else
//  - 路由组建<router-view>
export default {
  components: { MyAccount, MyInfo },
  data() {
    return {
      componentName: "MyAccount",
    };
  },
};
</script>

<style></style>
