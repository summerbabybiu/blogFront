<template>
  <div class="end-list">
    <div class="my-cover">
      <div v-if="isLoading">
        loading....
      </div>
      <ul v-if="!isLoading">
        <li v-for="(articleItem, index) in articleArray" class="my-btn a-item" v-bind:class="{'item-edit': message=='edit'}">
          <div class="title">
            <router-link v-if="message=='edit'" to="/edit/">{{ articleItem.title }}</router-link>
            <router-link v-else to="/article/">{{ articleItem.title }}</router-link>
          </div>
          <div class="other">
            <span>time: {{ articleItem.updatedAt}}</span>
            <!--<span>author: summerbaby</span>-->
          </div>
          <div v-html="articleItem.content"></div>
          <button v-if="message=='edit'" class="the-delete my-btn">
            <span class="blog-icon icon-delete"></span>
          </button>
          <router-link v-if="message=='edit'" :to="{name: 'edit', params:{detail: articleItem}}" class="the-modify my-btn">
            <span class="blog-icon icon-modify"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article',
    props: ['message'],
    data () {
      return {
        articleArray: '',
        isLoading: true,
        showFlag: false
      }
    },
    methods: {
      list: function () {
        this.$http.get('https://summerbaby.me/post/list').then(response => {
          console.log(response.body)
          this.articleArray = response.body
          this.isLoading = false
        },
        response => {
          console.log(response)
          this.isLoading = false
        })
      }
    },
    mounted: function () {
      console.log('counted')
    },
    created: function () {
      console.log('create')
      this.list()
    }

  }
</script>

<style scoped>
  .end-list {
    margin: 20px auto;
  }
  .a-item {
    max-height: 200px;
    height: auto;
    overflow: hidden;
    margin-bottom: 15px;
    position: relative;
  }
  .a-item:hover {
    color: inherit;
    background-color: #fff;
    border-color: inherit;
  }

  .a-item:hover .the-delete, .a-item:hover .the-modify {
    opacity: 1;
  }

  .item-edit {
    height: 66px;
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
  }
  .other {
    font-size: 12px;
    line-height: 20px;
    color: #b2b2b2;
    margin-bottom: 10px;
  }
  .the-delete {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;
    right: 10px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .the-modify {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;
    right: 40px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .blog-icon:before {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 25px;
    width: 25px;
    height: 25px;
  }
</style>
