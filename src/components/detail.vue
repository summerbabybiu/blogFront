<template>
  <div class="my-cover detail-cover">
    <div class="title">
      {{ title }}
    </div>
    <div class="time">
      {{ theTime }}
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  var aaa = require('@/components/getArticle').getArticle
  console.log(aaa)
  export default {
    name: 'detail',
    data () {
      return {
        title: '',
        content: '',
        articleId: '',
        theTime: ''
      }
    },
    created: function () {
//      console.log(this.$route.query.postid) 参数传在query中
//      if (this.$route.query.postid) {
//        this.articleId = this.$route.query.postid
//        this.getArticle()
//      }
  //  参数传在params中
      console.log(this.$route.params.postid)
      if (this.$route.params.postid) {
        this.articleId = this.$route.params.postid
//        this.getArticle()
        aaa.call(this, this.articleId, function (data) {
          console.log(data)
          this.title = data.title
          this.content = data.content
          this.theTime = data.createdAt
        })
      }
    },
    methods: {
//      getArticle: function () {
//        var postUrl = 'https://www.summerbaby.me/post/getByPathForArticle/' + this.articleId
//        this.$http.get(postUrl).then(response => {
//          console.log('then', response)
//          this.title = response.body.title
//          this.content = response.body.content
//          this.theTime = response.body.createdAt
//        }, response => {
//          alert('delete failed')
//          console.log('r', response)
//        })
//      }
    }
  }
</script>

<style scoped>
  .detail-cover {
    margin-top: 20px !important;
    margin-bottom: 80px !important;
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
