<template>
  <div class="modal-backdrop" @click.self="handleBackdropClick">
    <div class="modal">
      <form @submit.prevent="handleSubmit">
        <div class="form-left"><img :src="imageURL" /></div>
        <div class="form-right">
          <label>Description</label>
          <textarea v-model="description"></textarea>
          <button class="btn-filled" v-if="!isPending">Publish</button>
          <button class="btn-filled" v-else>Uploading...</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'

export default {
  props: ['imageURL'],
  setup(props, { emit }) {
    // DATA
    const { error, isPending, addDoc } = useCollection('posts')
    const description = ref('')

    // METHODS
    const handleBackdropClick = () => {
      emit('clicked-backdrop')
    }
    const handleSubmit = async () => {
      if (props.imageURL) {
        isPending.value = true
        await addDoc({
          description: description.value,
          createdAt: timestamp(),
        })
        isPending.value = false
        if (!error.value) {
          emit('clicked-backdrop')
        }
      }
    }

    return {
      // DATA
      isPending,
      description,

      // METHODS
      handleBackdropClick,
      handleSubmit,
    }
  },
}
</script>

<style lang="scss">
.modal-backdrop {
  background-color: rgba(37, 37, 37, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  form {
    background-color: white;
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    padding: 20px;
    img {
      max-width: 300px;
      max-height: 300px;
    }
    textarea {
      height: 100%;
      width: 100%;
      margin: 20px 20px 20px 0px;
    }
  }
}
.form-right {
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}
</style>
