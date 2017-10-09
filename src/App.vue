<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <my-head></my-head>
    <div id="main-body">
      <router-view></router-view>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
import MyHead from '@/components/MyHead'
import MyFoot from '@/components/MyFoot'

export default {
  name: 'app',
  components: {
    MyHead,
    MyFoot
  }
}
</script>

<style lang="sass">
 @import "assets/scss/base.scss";
</style>
