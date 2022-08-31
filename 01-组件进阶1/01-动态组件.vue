<template>
  <div>
    <button @click="componentName = 'MyAccount'">显示我的账户</button>
    <button  @click="componentName = 'MyInfo'">显示我的账户</button>
    <!-- 使用组件 -->
    <!-- <my-account></my-account>
    <my-info></my-info> -->
    <!-- 动态组件挂载点 -->
    <component :is="componentName"></component>
  </div>
</template>

<script>
import MyAccount from 'cpns/MyAccount.vue'
import MyInfo from 'cpns/MyInfo.vue'
// 目标: 动态组件 - 切换组件显示
// 场景: 同一个挂载点要切换 不同组件 显示
// 1. 创建要被切换的组件 - 标签+样式
// 2. 引入到要展示的vue文件内, 注册
// 3. 变量-承载要显示的组件名
// 4. 设置挂载点<component :is="变量"></component>
// 5. 点击按钮-切换comName的值为要显示的组件名

export default {
  components: { MyAccount, MyInfo },
  data(){
    return{
      componentName:'MyAccount'
    }
  }
}
</script>

<style>

</style>