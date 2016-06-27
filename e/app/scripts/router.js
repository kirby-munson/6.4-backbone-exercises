var Backbone = require('backbone');
var $ = require('jquery');
var views = require('./views/post');
var models = require('./models/post');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail'
  },
  initialize: function(){
    this.collection = new models.PostCollection();
  },
  index: function(){
    var postForm = new views.PostFormView({collection: this.collection});
    $('.app-form').html(postForm.render().el);

    this.collection.on('add', function(post){
      var $newpost = $('<dd><a id="list-item" href="#detail/' + post.get('_id') + '/">' + post.get('title') + '</a></dd>');
      var $deleteButton = $('<button class="deleteButton">Delete Post</button>');
      $('.app-list').append($newpost).append($deleteButton);
      $deleteButton.on('click', function(event){
    event.preventDefault();
    post.destroy();
    $newpost.hide();
    $deleteButton.hide();
  });
    });

    this.collection.fetch();
  },
  detail: function(postId){
    this.collection.fetch().done(function(){
      var post = this.collection.get(postId);
      var postDetail = new views.PostDetailView({model:post});
      $('.app').html(postDetail.render().el);
      }.bind(this));
    }
  });

  var router = new Router();


  module.exports = router;
