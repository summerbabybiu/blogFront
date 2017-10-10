<template>
  <div class="my-cover detail-cover">
    <div class="title">
      {{ title }}
    </div>
    <div class="time">
      {{ detail.createdAt }}
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        title: '',
        content: '',
        detail: ''
      }
    },
    created: function () {
      console.log(this.$route.params.detail)
      if (this.$route.params.detail) {
        this.detail = this.$route.params.detail
        this.content = this.detail.content
        this.title = this.detail.title
      }
    }
  }
</script>

<style scoped>
  .detail-cover {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .title {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
  }
  .time {
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #b2b2b2;
    margin-bottom: 10px;
  }
</style>
