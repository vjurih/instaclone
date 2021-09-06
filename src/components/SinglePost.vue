<template>
  <div class="post-wrapper">
    <div class="post-header">
      <div class="left-user">
        <!-- <div class="post-avatar">
          <img src="https://via.placeholder.com/120" />
        </div> -->
        <div class="post-userinfo">
          <div class="post-username font-heavy">{{ data.displayName }}</div>
        </div>
      </div>

      <div class="post-options">
        <span class="material-icons-outlined">more_horiz</span>
      </div>
    </div>
    <div class="post-image"><img :src="data.imageURL" /></div>
    <div class="post-bottom">
      <div class="post-actions">
        <div class="actions-left">
          <span class="material-icons-outlined">favorite_border</span>

          <span class="material-icons-outlined">maps_ugc</span>

          <span class="material-icons-outlined">send</span>
        </div>
        <div class="actions-right">
          <span class="material-icons-outlined">bookmark_border</span>
        </div>
      </div>
      <div class="post-likesliste"></div>
      <div class="post-description">
        <span class="font-heavy">{{ data.displayName }}</span>
        <span class="post-description-content">
          {{ data.description }}
        </span>
      </div>
      <div class="post-commentslist"></div>
      <div class="post-time">{{ data.createdAt }} ago</div>
      <div class="post-publishcomment"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss">
.post-avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid lightgray;
  }
}
.left-user {
  display: flex;
  flex-direction: row;
}
.post-wrapper {
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid lightgray;
  border-radius: 4px;
}
.post-header {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 15px 20px;
  border-radius: 4px;
}
.post-image {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.post-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.actions-left,
.actions-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  span {
    padding: 5px 8px;
    font-size: 32px;
    font-weight: 100;
  }
  span:nth-child(1) {
    padding-left: 0;
  }
  span:last-child {
    padding-right: 0;
  }
}
.post-userinfo,
.post-options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  .post-location {
    font-size: 0.8em;
  }
  .post-username {
    margin-left: 12px;
  }
  span {
    font-size: 28px;
  }
}
.post-description {
  text-align: left;
  margin-top: 10px;
  &-content {
    margin-left: 5px;
  }
}
.post-bottom {
  margin: 10px 20px 20px 20px;
}
.post-time {
  text-transform: uppercase;
  color: darkgray;
  font-size: 12px;
  display: flex;
  margin: 20px 0;
}
.right-nav {
  span:last-child {
    padding-right: 0;
  }
}
</style>
