<template>
  <NewPostModal
    v-if="showNewPostModal"
    :imageURL="imageURL"
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
  data() {
    return {
      showNewPostModal: false,
      imageUrl: '',
    }
  },
  methods: {
    toggleModal() {
      showNewPostModal = !showNewPostModal
    },
    handleImageSelect(selected) {
      imageURL = URL.createObjectURL(selected)
      toggleModal()
    },
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
  .btn-filled {
    text-transform: uppercase;
    color: white;
    background-color: black;
    border-radius: 4px;
    border: none;
    padding: 10px;
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
