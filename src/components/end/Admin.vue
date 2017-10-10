<template>
  <end-article-list message="edit"></end-article-list>
</template>

<script>
  import Article from '@/components/common/Article'

  export default {
    name: 'admin',
    components: {
      'end-article-list': Article
    },
    data () {
      return {

      }
    },
    methods: {
      getUserStatus: function () {
        this.$http.get('https://www.summerbaby.me/admin/user').then(response => {
        },
        response => {
          console.log('r', response)
          if (response.status === 401) {
            this.$router.push({path: '/admin/login'})
          } else {
            alert(response.data)
          }
        })
      }
    },
    created: function () {
      this.getUserStatus()
    }
  }
</script>
