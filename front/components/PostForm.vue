<template>
  <v-card style="margin-bottom:10px">
    <v-container>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="onSubmitForm"
      >
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success-messages="sucessMessages"
          :success="sucess"
          :rules="[ v => !!v || 'type on less 1 letter']"
          @input="onChangeTextarea"
        />
        <v-btn
          type="submit"
          absolute
          right
        >
          chckchck
        </v-btn>
        <v-btn>image</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      hideDetails:false,
      sucessMessages:'',
      sucess: false,
      valid:false,
      content:''
    }
  },
  computed:{
    ...mapState('users',['me'])
  },
  methods:{
    onChangeTextarea(){
      this.hideDetails = true
      this.sucess = false
      this.sucessMessages = ''
    },
    onSubmitForm(){
      if(this.$refs.form.validate()){
        this.$store.dispatch('posts/add',{
          content : this.content,
          User: {
            nickName:this.me.nickName
          },
          Comments:[],
          Images:[],
          id: Date.now(),
          createdAt:Date.now()
        })
        .then(()=>{
          this.content = ''
          this.hideDetails = false
          this.sucess = true
          this.sucessMessages = '게시글 등록 성공'
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