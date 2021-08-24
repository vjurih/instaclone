<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <h2>Sign up</h2>
      <input type="text" placeholder="username" v-model="username" autofocus />
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <button class="btn-filled" v-if="!isPending">Sign up</button>
      <button class="btn-filled" v-else>Loading...</button>
      <div :class="{ error: error }">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '@/composables/useSignup'
import { useRouter } from 'vue-router'

export default {
  setup(props, { emit }) {
    // DATA
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const { error, isPending, signup } = useSignup()
    const router = useRouter()

    // METHODS
    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, username.value)
      if (!error.value) {
        router.push({ name: 'Home' })
      } else {
        console.log(error.value)
      }
    }

    return { username, email, password, handleSubmit, isPending, error }
  },
}
</script>

<style lang="scss"></style>
