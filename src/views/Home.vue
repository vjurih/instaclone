<template>
  <div class="home">
    <PostList :filter="filter" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const filter = ref('all')
    return { filter }
  },
}
</script>

<style>
.home {
  margin: 40px auto;
}
</style>
