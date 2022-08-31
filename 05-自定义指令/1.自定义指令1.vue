<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
// 自定义指令

//  -v-指令名
//  - 局部 注册一个 v-focus 自动获取焦点 
// directives:{指令的名字：{配置项。。。} }
// -配置项的函数的参数 ：el绑定的dom
//    -- inserted 函数 当我们使用指令的dom插入文档会被调用
export default {
  directives:{
    focus:{
      inserted(el){
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>