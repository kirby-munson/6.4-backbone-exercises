var Backbone = require('backbone');
var model = require('./models/post');
var $ = require('jquery');
var view = require('./views/post');




var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail'
  },
  initialize: function(){

    this.collection = new model.PostCollection();
  },
  index: function(){
    var $title = $('<h1>Welcome to My Blog</h1>');
    var $subTitle = $('<h5>Click on a title to read more!</h5>')
    $('.app').append($title).append($subTitle);
    this.collection.on('add', function(post){
      var $newpost = $('<a href="#detail/' + post.get('_id') + '/">' + post.get('title') + '</a><br />');
      $('.app').append($newpost);
    });

    this.collection.fetch();
  },
  detail: function(postID){
    this.collection.fetch().done(function(){
      var post = this.collection.get(postID);
      var postDetail = new view.PostDetailView({model: post});

      $('.app').html(postDetail.render().el);
    }.bind(this));
  }
});

var router = new Router();

module.exports = {
  'router': router
};
