<template>
  <h1>Posts by {{ userName }}</h1>
  <PostList :filter="{ userName }" />
</template>

<script>
import { useRoute } from 'vue-router'
import { projectAuth } from '../firebase/config'
import PostList from '../components/PostList.vue'
export default {
  components: { PostList },
  setup() {
    const route = useRoute()
    const userName = route.params.userName
    return { route, userName }
  },
}
</script>

<style></style>
