<template>
  <div class="home">
    <!-- <h1 class="title--xl">Home</h1> -->
    <PostList :filter="all" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const all = ref('all')
    return { all }
  },
}
</script>

<style>
.home {
  margin: 40px auto;
}
</style>
