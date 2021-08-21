<template>
  <div class="home">
    <!-- <h1 class="title--xl">Home</h1> -->
    <PostList />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: { PostList },
}
</script>

<style>
.home {
  margin: 40px auto;
}
</style>
