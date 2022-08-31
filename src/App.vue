<template>
  <div class="app">
    <!-- 头部 -->
    <my-header title="TabBar案例" background=""></my-header>
    <!-- 商品列表主体内容 -->
    <component :is="componentName"></component>
    <!-- footer -->
    <my-footer :list="tabList" @change-cpnName="componentName = $event"></my-footer>
  </div>
</template>

<script>
import MyHeader from "cpns/MyHeader.vue";
import MyFooter from "cpns/MyFooter.vue";
import MyGoodsList from "@/views/MyGoodsList.vue";
import MyGoodsSearch from "@/views/MyGoodsSearch.vue";
import MyUserInfo from "@/views/MyUserInfo.vue";
export default {
  components: { MyHeader, MyFooter, MyGoodsList, MyGoodsSearch, MyUserInfo },
  data() {
    return {
      componentName: MyGoodsList,
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

};
</script>

<style scoped>
.app{
  padding: 45px 0 50px 0;
}
</style>
