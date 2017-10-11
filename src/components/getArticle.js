/**
 * Created by wangzhilong on 2017/10/12.
 */
  exports.getArticle = function (articleId, callback) {
    var postUrl = 'https://www.summerbaby.me/post/getByPathForArticle/' + articleId
    this.$http.get(postUrl).then(response => {
      console.log('then', response)
      callback.call(this, response.body)
    }, response => {
      callback(null)
    })
  }
