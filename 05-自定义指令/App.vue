<template>
  <div>
    <input type="text" v-focus:a.red="msg" :value="msg">
  </div>
</template>

<script>
// 完整自定义指令

// v-指令名：指令参数.指令修饰符="确定的值"

// 指令的配置对象的函数
//  -el 绑定的dom
// -binding 指令的绑定的信息

// inserted(el,binding){}
// update(el,binding) 当指令绑定的值发生变化的时候被调用
export default {
  data(){
    return{
      msg:"你vue好"
    }
  },
  directives:{
    focus:{
      inserted(el,binding){
       
        if(binding.modifiers.red){
          el.style.color = 'red'
           console.log(el,binding);
        }
      },
      updated(el,binding) {
        el.value = binding.value
      },
    }
  }
}
</script>

<style>

</style>