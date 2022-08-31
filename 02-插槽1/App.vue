<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>

      <my-pannel></my-pannel>
      <my-pannel title="静夜思">

        <p>1</p>
        <p>2</p>
        <p>3</p>
      </my-pannel>

      
    </div>
  </div>
</template>

<script>
import MyPannel from "./components/MyPannel";
export default {
  components: {
    MyPannel,
  },
};
</script>