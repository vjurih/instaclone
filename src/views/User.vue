<template>
<<<<<<< HEAD
  <h1>Posts by {{ userName }}</h1>
  <PostList :filter="{ userName }" />
=======
  <h1>Posts by {{ displayName }}</h1>
  <PostList :filter="{ displayName }" />
>>>>>>> bug-fix
</template>

<script>
import { useRoute } from 'vue-router'
import { projectAuth } from '../firebase/config'
import PostList from '../components/PostList.vue'
export default {
  components: { PostList },
  setup() {
    const route = useRoute()
<<<<<<< HEAD
    const userName = route.params.userName
    return { route, userName }
=======
    const displayName = route.params.displayName
    return { route, displayName }
>>>>>>> bug-fix
  },
}
</script>

<style></style>
