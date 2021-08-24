<template>
  <div class="nav-container">
    <nav class="nav">
      <div class="left-nav">
        <h1 class="title--nav">
          <span>Insta</span>
          <span class="font-heavy">clone</span>
        </h1>
      </div>

      <div class="right-nav" v-if="user">
        <router-link :to="{ name: 'Home' }" class="pointer">
          <span class="material-icons-outlined">home</span>
        </router-link>

        <div class="upload-button">
          <label for="file-upload">
            <span class="material-icons-outlined">
              control_point
            </span>
          </label>
          <input type="file" id="file-upload" @change="handleChange" />
        </div>

        <span class="material-icons-outlined">
          bookmark_border
        </span>

        <router-link :to="{ name: 'User', params: { userName } }">
          <span class="material-icons-outlined">
            account_circle
          </span>
        </router-link>
      </div>

      <div class="logged-out" v-else>
        <router-link :to="{ name: 'Signup' }">
          <button class="btn-filled">Sign up</button>
        </router-link>
        <router-link :to="{ name: 'Login' }">
          <button class="btn-outlined">Log in</button>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'
import { projectAuth } from '../firebase/config'
import { computed, ref } from '@vue/reactivity'

export default {
  setup(props, { emit }) {
    //DATA
    const { user } = getUser()
    const { error, isPending, logout } = useLogout()
    const router = useRouter()
    const userName = user.value.userName

    // METHODS
    const handleChange = function(e) {
      const selected = e.target.files[0]
      emit('selected-image', selected)
    }
    const handleLogOut = async function() {
      const res = await logout()
      if (!error.value) {
        console.log('User logged out')
        router.push({ name: 'Login' })
      } else {
        console.log(error.value)
      }
    }

    return { handleChange, user, userName, handleLogOut }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  align-items: center;
  .material-icons-outlined {
    cursor: pointer;
    font-size: 32px;
    padding: 4px 8px;
  }
  a {
    color: black;
  }
  a:visited {
    color: black;
  }
}

.nav-container {
  background-color: white;
  display: flex;
  justify-content: center;
}

.right-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}

input[type='file'] {
  display: none;
}
</style>
