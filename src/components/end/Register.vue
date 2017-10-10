<template>
  <div class="sign-area">
    <div class="fill-area">
      <input class="my-input u-name" v-model="username" type="text" name="uName" placeholder="用户名">
    </div>
    <div class="fill-area">
      <input class="my-input u-pwd" v-model="pwd" type="password" name="uPwd" placeholder="密码">
    </div>
    <button class="my-btn sure-sign-btn" v-on:click="toRegister">Sign Up</button>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        username: '',
        pwd: ''
      }
    },
    methods: {
      toRegister: function () {
        var postData = {username: this.username, password: this.pwd}
        console.log(postData)
        this.$http.post('https://www.summerbaby.me/admin/signup', postData).then(response => {
          console.log(response)
          if (response.status === 200) {
            this.$router.push({path: '/admin'})
          } else {
            alert(response.data)
          }
        },
        response => {
          alert('failed')
          console.log(response)
        })
      }
    }
  }
</script>
