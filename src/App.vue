<template>
  <NewPostModal
    v-if="showNewPostModal"
    :imageFile="file"
    @clicked-backdrop="toggleModal"
  />
  <Navbar @selected-image="handleImageSelect" />
  <router-view />
</template>

<script>
import { ref } from '@vue/reactivity'
import Navbar from './components/Navbar.vue'
import NewPostModal from './components/NewPostModal.vue'
export default {
  components: { Navbar, NewPostModal },
  setup() {
    // DATA
    const showNewPostModal = ref(false)
    const file = ref(null)

    // METHODS
    const toggleModal = () => {
      showNewPostModal.value = !showNewPostModal.value
    }
    const handleImageSelect = (selected) => {
      file.value = selected
      if (file.value) {
        toggleModal()
      }
    }

    return { showNewPostModal, handleImageSelect, file, toggleModal }
  },
}
</script>

<style lang="scss">
body {
  background-color: rgb(247, 247, 247);
  margin: 0;
}

#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin: 0;

  // Typography

  .title--sm {
    font-size: 1rem;
    font-weight: 700;
  }
  .title--md {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .title--lg {
    font-size: 1.75rem;
    font-weight: 700;
  }
  .title--xl {
    font-size: 2.25rem;
    font-weight: 700;
  }
  .title--nav {
    text-transform: uppercase;
    font-weight: 300;
  }
  .font-light {
    font-weight: 300;
  }
  .font-heavy {
    font-weight: 700;
  }
  .error {
    color: red;
    margin: 20px 0;
  }
  .pointer {
    cursor: pointer;
  }
  .btn {
    text-transform: uppercase;
    padding: 10px;
    border-radius: 4px;
    margin: 4px;
    &-filled {
      @extend .btn;
      color: white;
      background-color: black;
      border: none;
    }
    &-outlined {
      @extend .btn;
      border: 2px solid black;
      color: black;
      background-color: transparent;
      padding: 8px;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
