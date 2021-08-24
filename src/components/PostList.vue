<template>
  <div v-for="doc in formattedDocuments" :key="doc.id">
    <SinglePost :data="doc" class="singlepost" />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed } from '@vue/reactivity'

export default {
  components: { SinglePost },
  props: ['filter'],
  setup(props, { emit }) {
    const { error, documents } = getCollection('posts', props.filter)
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })

    return { error, documents, formattedDocuments }
  },
}
</script>

<style></style>
