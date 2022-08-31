<template>
  <div>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      v-if="isShowBtn"
      @click="isShowBtn = false"
    >
      +Tag
    </button>
    <input
      v-else
      type="text"
      style="width: 70px"
      v-model.trim="tagInfo"
      @blur="addTagInfo"
      @keydown.enter="addTagInfo"
      v-focus
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBtn: true,
      tagInfo: "",
    };
  },
  directives: {
    focus: {
      // 当绑定的dom 插入父节点 调用inserted 钩子
      inserted(el) {
        el.focus();
      },
    },
  },
  methods: {
    addTagInfo() {
      this.isShowBtn = true;
      if (this.tagInfo !== "") {
        this.$emit("add-info",this.tagInfo);
      }
      // 清空
      this.tagInfo =""
    },
  },
};
</script>

<style></style>
