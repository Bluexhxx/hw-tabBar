<template>
  <div>
    <my-table :glist="goodsList">
      <template #theadTr>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <!-- {good} 解构MyTable 传过来的:good="item" -->
      <template #body="{ good }">
        <td>{{ good.id }}</td>
        <td>{{ good.goods_name }}</td>
        <td>{{ good.goods_price }}</td>
        <td>
          <add-tag
          @add-info="good.tags.push($event)"></add-tag>
          <span
            class="badge bg-warning text-dark"
            v-for="(str, index) in good.tags"
            :key="index"
            >{{ str }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delGood(good.id)">
            删除
          </button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
// 引入axios 先配置自己的axios
import axios from "@/utils/request.js";
import MyTable from "cpns/MyTable.vue";
import AddTag from "@/components/AddTag.vue";

export default {
  components: { MyTable, AddTag },
  data() {
    return {
      goodsList: [],
    };
  },
  created() {
    // 发送请求
    this.getGoods();
  },

  methods: {
    async getGoods() {
      try {
        const { data } = await axios({ url: "/api/goods" });
        this.goodsList = data.data;
        // console.log(this.goodsList)
      } catch {
        alert("请求商品列表失败，请刷新");
      }
    },
    delGood(id) {
      this.goodsList = this.goodsList.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
span.badge {
  margin-right: 5px;
}
</style>
