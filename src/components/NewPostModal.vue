<template>
  <div class="modal-backdrop" @click.self="handleBackdropClick">
    <div class="modal">
      <form>
        <div class="form-left"><img :src="imageURL" /></div>
        <div class="form-right">
          <label>Description</label>
          <textarea></textarea>
          <button class="btn-filled">Publish</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageURL'],
  methods: {
    handleBackdropClick() {
      this.$emit('clicked-backdrop')
    },
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
