<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form
            ref="form"
            v-model="valid"
            @submit.prevent="onSubmitForm"
          >
            <v-text-field
              v-model="nickName"
              label="닉네임"
              :rules="nickNameRules"
              required
            />
            <v-btn
              color="blue"
              type="submit"
            >
              수정
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <FollowList />
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <FollowList />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import FollowList from '~/components/FollowList';
  export default {
    components: {
      FollowList,
    },
    middleware:'anonymous',
    data() {
      return {
        valid:false,
        nickName:'',
        nickNameRules:[v=>!!v || 'type nickName'],
      };
    },
    head() {
      return {
        title: '프로필',
      };
    },
    methods:{
      onSubmitForm(){
        if(this.$refs.form.validate()){
          this.$store.dispatch('users/editUserNickName',{
            nickName:this.nickName
          })
        }
      }
    }
  };
</script>

<style>
</style>