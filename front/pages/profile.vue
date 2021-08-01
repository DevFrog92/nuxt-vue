<template>
  <div>
    <v-container>
      <v-card style="margin-bottom:20px">
        <v-container>
          <v-subheader>my profile</v-subheader>
        </v-container>
        <v-container>
          <v-form>
            <v-text-field
              label="nickname" 
              required
            />
            <v-btn
              color="blue"
              type="submit"
            >
              modify
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>following</v-subheader>
          <FollowList />
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>follower</v-subheader>
          <FollowList />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FollowList from '~/components/FollowList'
export default {
  components:{
    FollowList,
  }
}
</script>

<style>

</style>