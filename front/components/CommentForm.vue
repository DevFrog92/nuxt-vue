<template>
  <v-form
    ref="form"
    v-model="valid"
    style="position:relative"
    @submit.prevent="onSubmitForm"
  >
    <v-textarea
      v-model="content"
      filled
      label="comment"
      :hide-details="hideDetail"
      :success="sucess"
      :success-messages="sucessMessages"
      @input="onChangeTextarea"
    />
    <v-btn type="submit">
      chekcheck
    </v-btn>
  </v-form>
</template>

<script>
export default {
  props:{
    postId:{
      type:Number,
      required:true
    }
  },
  data(){
    return {
      hideDetail:true,
      sucessMessages:'',
      sucess: false,
      valid:false,
      content:''
    }
  },
  computed:{
    me(){
      return this.$store.state.users.me
    }
  },
  methods:{
    onChangeTextarea(value){
      if(value.length){
        this.hideDetail = true
        this.sucesss = false
        this.sucessMessages = ''
      }
    },
    onSubmitForm(){
      if(this.$refs.form.validate()){
        this.$store.dispatch('posts/addComment',{
            id: Date.now(),
            postId:this.postId,
            content:this.content,
            User: {
              nickName:this.me.nickName
            }
        })
        .then(()=>{
          this.content = ''
          this.sucess = true
          this.sucessMessages = 'comment written'
          this.hideDetail = false
        })
        .catch(()=>{
          
        })
      }
    }
  }

}
</script>

<style>

</style>