<template>
  <div class="my-tab-bar">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="tab-item"
      :class="['tab-item', { current: index === active }]"
      @click="[(active = index),$emit('change-cpnName',item.componentName)]"
    >
      <!-- 图标 -->
      <span :class="`iconfont ${item.iconText}`"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // 限制list 传过来的个数
  // validator(val) :自定义校验器 需要返回布尔值，
  // 返回true 校验成功 false 校验失败
  //  val 校验数据
  props: {
    list: {
      type: Array,
      required: true,
      validator(val) {
        // console.log(val);
        const len = val.length;
        if (len <= 4 && len >= 0) {
          return true;
        }
        // 失败的时候自己抛出一个错误信息
        throw new Error("Your data should be between 0 and 4 in length");
      },
    },
  },
  data() {
    return {
      // 记录点击的那个下标
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  line-height: 1;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
  .iconfont {
    color: #1d7bff;
  }
}
</style>
