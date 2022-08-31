<template>
  <div>
    <label>
      <span>用户名:</span>
      <input type="text" placeholder="请输入账号" />
    </label>

    <br />

    <label>
      <span>密码:</span>
      <input type="text" placeholder="请输入密码" />
    </label>
  </div>
</template>

<script>
export default {
  activated() {
    console.log("MyAccount激活状态");
  },
  deactivated() {
    console.log("MyAccount失活状态");
  },
  created() {
    console.log("MyAccount创建了");
  },
  destroyed() {
    console.log("MyAccount销毁了");
  },
};
</script>

<style></style>
