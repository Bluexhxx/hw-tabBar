<template>
  <div class="app">
    <my-header title="TabBar案例作业" background="skyblue"></my-header>
    <component :is="componentName"></component>
    <my-footer :list="tabList" @change-cpnname="componentName = $event"></my-footer>
  </div>
</template>
<script>
import MyFooter from "cpns/MyFooter.vue";
import MyHeader from "cpns/MyHeader.vue";

import MyGoodsList from "@/views/MyGoodsList.vue";
import MyGoodsSearch from "@/views/MyGoodsSearch.vue";
import MyUserInfo from "@/views/MyUserInfo.vue";

export default {
  components: { MyFooter, MyHeader, MyGoodsSearch, MyUserInfo, MyGoodsList },
  data() {
    return {
      componentName: "MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods:{

  }
};
</script>
<style scoped>
.app {
  padding: 45px 0 50px 0;
}
</style>
