<template>
  <h1>Posts by {{ displayName }}</h1>
  <PostList :filter="{ displayName }" />
</template>

<script>
import { useRoute } from 'vue-router'
import { projectAuth } from '../firebase/config'
import PostList from '../components/PostList.vue'
export default {
  components: { PostList },
  setup() {
    const route = useRoute()
    const displayName = route.params.displayName
    return { route, displayName }
  },
}
</script>

<style></style>
