<template>
  <div class="nav-container">
    <nav class="nav">
      <div class="left-nav">
        <h1 class="title--nav">
          <span>Insta</span>
          <span class="font-heavy">clone</span>
        </h1>
      </div>
      <div class="right-nav">
        <span class="material-icons-outlined">home</span>
        <div class="upload-button">
          <label for="file-upload">
            <span class="material-icons-outlined">
              control_point
            </span>
          </label>
          <input type="file" id="file-upload" @change="handleChange" />
        </div>

        <span class="material-icons-outlined">bookmark_border</span>
        <span class="material-icons-outlined">account_circle</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(e) {
      const selected = e.target.files[0]
      this.$emit('selected-image', selected)
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
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

  span {
    font-size: 32px;
    padding: 5px 8px;
  }
}

input[type='file'] {
  display: none;
}
</style>
