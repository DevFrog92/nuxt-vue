<template>
  <v-container v-if="post">
    <PostCard :post="post" />
  </v-container>
  <div v-else>
    post not exist
  </div>
</template>

<script>
import PostCard from '~/components/PostCard'
export default {
  components:{
    PostCard
  },
  computed:{
    post(){
      return this.$store.state.posts.mainPosts.find(v => v.id === parseInt(this.$router.params.id,10))
    }
  }

}
</script>

<style>

</style>