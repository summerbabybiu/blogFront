<template>
  <header v-bind:class="{ 'on-open' : navShow }">
    <div class="fix-nav">
      <div class="my-cover">
        <div class="logo-name">
          <a href="/">{{ logoName }}</a>
        </div>
        <div class="nav-bar" v-on:click="make">
          <div class="icon-bar"></div>
          <div class="icon-bar"></div>
          <div class="icon-bar"></div>
        </div>
      </div>
    </div>
    <div class="menu-nav">
      <ul class="menu-list">
        <li><router-link to="/about" @click.native="closeNav">About</router-link></li>
        <li><router-link to="/" @click.native="closeNav">....</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'myHead',
    data () {
      return {
        logoName: 'summerbaby',
        navShow: false
      }
    },
    methods: {
      make: function () {
        this.navShow = !this.navShow
      },
      closeNav: function () {
        if (this.navShow === true) {
          this.make()
        }
      }
    }
  }
</script>
