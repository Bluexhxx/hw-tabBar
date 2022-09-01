<template>
  <div>
    <MyTable :goodsList="goodsList">
      <template #head>
        <tr>
          <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
        </tr>
      </template>
      <template #bodyli="{ good }">
        <td>{{ good.id }}</td>
        <td>{{ good.goods_name }}</td>
        <td>{{ good.goods_price }}</td>
        <td>
          <add-tag @add-info="good.tags.push($event)"></add-tag>
          <span
            class="badge bg-warning text-dark"
            v-for="(str, index) in good.tags"
            :key="index"
            >{{ str }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(good.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "cpns/MyTable";
import AddTag from "cpns/AddTag.vue";
import axios from "@/utils/request.js";
// 目标: 循环商品列表表格
// 1. 封装MyTable.vue 整体表格组件-一套标签和样式
// 2. axios请求数据
// 3. 传入MyTable组件里循环tr显示数据

// 目标: 展示tags标签
// 1. tags数组 - 某个td循环span使用文字
// 2. span设置bs的样式

// 目标: 删除数据
// 1. 删除按钮 - 点击事件
// 2. 作用域插槽把索引值关联出来了
// scope身上就有row和index
// 3. 删除中使用scope.index的索引值
// 4. 删除事件里删除数组里对应索引值的数据
export default {
  components: {
    MyTable,
    AddTag,
  },

  data() {
    return {
      goodsList: [], // 所有数据
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      try {
        const { data } = await axios({
          url: "/api/goods",
        });
        this.goodsList = data.data;
      } catch (error) {
        alert("请求商品列表失败，请刷新");
      }
    },
    del(i) {
      this.goodsList = this.goodsList.filter((item) => item.id !== i);
    },
  },
};
</script>

<style scoped>
span.badge {
  margin-right: 5px;
}
</style>
