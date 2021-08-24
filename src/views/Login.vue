<template>
  <div class="login">
    <form @submit.prevent="handleLogin">
      <h2>Login</h2>
      <input type="email" placeholder="email" v-model="email" autofocus />
      <input type="password" placeholder="password" v-model="password" />
      <button class="btn-filled" v-if="!isPending">Log in</button>
      <button class="btn-filled" v-else>Loading...</button>
      <div :class="{ error: error }">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'

export default {
  setup(props, { emit }) {
    // DATA
    const { error, isPending, login } = useLogin()
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    // METHODS
    const handleLogin = async function() {
      const res = await login(email.value, password.value)
      if (!error.value) {
        router.push({ name: 'Home' })
      } else {
        console.log(error.value)
      }
    }
    return { error, email, password, handleLogin, isPending, error }
  },
}
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    background-color: white;
    width: 400px;
    margin-top: 60px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    input {
      width: 60%;
      margin: 10px 0px;
      height: 25px;
      border: none;
      border-bottom: 1px solid black;
    }
    button {
      margin-top: 20px;
    }
  }
}
</style>
