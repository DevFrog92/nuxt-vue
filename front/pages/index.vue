<template>
  <v-container>
    <PostForm v-if="me" />
    <div>
      <post-card
        v-for="p in mainPosts"
        :key="p.id"
        :post="p"
      />
    </div>
  </v-container>
</template>

<script>
  import PostCard from '~/components/PostCard';
  import PostForm from '~/components/PostForm';
  export default {
    name:'Home',
    components: {
      PostCard,
      PostForm,
    },
    data() {
      return {
      }
    },
    computed:{
      me(){
        return this.$store.state.users.me;
      },
      mainPosts(){
        return this.$store.state.posts.mainPosts;
      }
    }
  }
</script>

<style>
</style>