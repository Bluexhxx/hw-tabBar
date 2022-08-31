<template>
  <div>
    <button @click="componentName = 'MyAccount'">显示我的账户</button>
    <button @click="componentName = 'MyInfo'">显示我的信息</button>
    <!-- 使用组件 -->
    <!-- <my-account></my-account>
    <my-info></my-info> -->
    <!-- 动态组件挂载点 -->

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
    <!-- <keep-alive>
      <my-account v-if="componentName == 'MyAccount'"></my-account>
      <my-info v-else></my-info>
    </keep-alive> -->
  </div>
</template>

<script>
// 激活 失活
// -只针对被缓存的组件
// -激活: 创建了并显示
// -失活：创建了但没有显示

// activated 激活的钩子函数
// deactivated 失活的钩子函数
import MyAccount from "cpns/MyAccount.vue";
import MyInfo from "cpns/MyInfo.vue";

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
