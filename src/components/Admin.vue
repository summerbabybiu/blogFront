<template>
  <end-article-list message="edit"></end-article-list>
</template>

<script>
  import Article from '@/components/Article'

  export default {
    name: 'admin',
    components: {
      'end-article-list': Article
    },
    data () {
      return {

      }
    }
  }
</script>
