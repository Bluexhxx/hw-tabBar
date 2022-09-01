<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in list"
      :key="index"
      @click="[active = index,changeCpnName(item.componentName)]"
      :class="{ current: active === index }"
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
  data() {
    return {
      active: 0,
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
      validator(val) {
        if (val.length >= 0 && val.length <= 4) {
          return true; // 符合条件就return true
        } else {
          throw new Error("数据在0-4位之间");
        }
      },
    },
  },
  methods:{
    changeCpnName(cpnName){
      this.$emit("change-cpnname",cpnName)
    }
  }
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
  line-height: 1;

  background-color: white;
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
