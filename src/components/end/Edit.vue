<template>
  <div id="editor" class="my-cover">
    <input type="text" class="my-input type-title" placeholder="标题" v-model="title" name="title">
    <div class="content-edit-and-content">
      <textarea class="type-part my-input" name="content" v-model="content" debounce=500></textarea>
      <div class="show-part my-input" v-html="compiledMarkdown"></div>
    </div>
    <button type="submit" class="submit-article my-btn" v-on:click="createArticle">发表</button>
  </div>
</template>

<script>
  var getArticle = require('@/components/getArticle').getArticle
  var marked = require('marked')

  export default {
    name: 'edit',
    data () {
      return {
        content: '',
        title: ''
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.content, { sanitize: true })
      }
    },
    created: function () {
      // 参数传在query中
      console.log(this.$route.query.postid)
      if (this.$route.query.postid) {
        this.articleId = this.$route.query.postid
        getArticle.call(this, this.articleId, function (data) {
          this.title = data.title
          this.content = data.content
          this.theTime = data.createdAt
        })
      }
    },
    filters: {
      marked: marked
    },
    methods: {
      createArticle: function () {
        console.log({ title: this.title, content: this.content })
        var postData = { title: this.title, content: this.content }
        var postURL = 'https://www.summerbaby.me/post/create'
        if (this.articleId) {
          postData['postid'] = this.detail.objectId
          postURL = 'https://www.summerbaby.me/post/update'
        }
        this.$http.post(postURL, postData,
          ).then(response => {
            console.log('then', response.body)
            this.$router.push({path: '/'})
          },
          response => {
            console.log(response)
          })
      }
    }
  }
</script>

<style scoped>
  #editor {
    position: relative;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .content-edit-and-content {
    position: relative;
    overflow: hidden;
  }

  .type-part, .show-part {
    display: inline-block;
    width: 49%;
    height: 50vh;
    overflow-y: scroll;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  .show-part {
    border: 1px solid #ccc;
    word-break: break-all;
    background-color: #f3f5f6;
    float: right;
  }

  textarea.type-part {
    border: none;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    padding: 20px;
    font-family: 'Monaco', courier, monospace;
    float: left;
  }

  code {
    color: #f66;
  }

  .submit-article {
    margin: 40px auto;
    max-width: 350px;
    clear: both;
  }

  .type-title {
    margin-bottom: 20px;
  }
</style>
