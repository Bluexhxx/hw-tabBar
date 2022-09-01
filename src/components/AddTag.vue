<template>
  <div>
    <button  v-if="isBtnShow" @click="isBtnShow = false" type="button" class="btn btn-primary btn-sm">+Tag</button>
    <input v-model.trim="tagMsg" v-else type="text" v-focus @blur="blurFn" @keydown.enter="blurFn"/>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isBtnShow:true,
        tagMsg:''
      }
    },
    directives:{
      focus:{
        inserted(el){
          el.focus()
        }
      }
    },
    methods:{
      blurFn(){
        this.isBtnShow = true
        this.$emit("add-info",this.tagMsg)
        this.tagMsg = ''
      }
    }
};
</script>

<style></style>
