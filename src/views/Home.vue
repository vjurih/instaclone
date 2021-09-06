<template>
  <div class="home">
<<<<<<< HEAD
    <PostList :filter="filter" />
=======
    <!-- <h1 class="title--xl">Home</h1> -->
    <PostList :filter="all" />
>>>>>>> bug-fix
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: { PostList },
  setup() {
<<<<<<< HEAD
    const filter = ref('all')
    return { filter }
=======
    const all = ref('all')
    return { all }
>>>>>>> bug-fix
  },
}
</script>

<style>
.home {
  margin: 40px auto;
}
</style>
