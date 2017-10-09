<template>
  <footer>
    <div class="my-cover">
      <div class="footer-text">{{ footerText }}</div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'myFoot',
    data () {
      return {
        footerText: 'Created By Summerbaby.'
      }
    }
  }
</script>
