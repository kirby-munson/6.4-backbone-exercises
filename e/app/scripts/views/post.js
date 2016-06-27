var Backbone = require('backbone');
var formTemplate = require('../templates/postform.hbs');
var postItemTemplate = require('../templates/postList.hbs');
var $ = require('jquery');

var PostFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit': 'addPost'
  },
  render: function(){
    var renderedHTML = this.template();
    this.$el.html(renderedHTML);
    return this;
  },
  addPost: function(event){
    event.preventDefault();
    this.collection.create({
      title:$('#title').val(),
      date:$('#date').val(),
      content:$('#content').val()
    });
    $('#title').val('');
    $('#content').val('');
    $('#date').val('');
  }
});

var PostListView = Backbone.View.extend({
  tagName: 'dl',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(post){
    var postItem = new PostItemView({model: post});
    this.$el.append(postItem.render().el);
  }
});

var PostItemView = Backbone.View.extend({
  tagName: 'dd',
  template: postItemTemplate,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

var PostDetailView = Backbone.View.extend({
  render: function(){
    var $button = $('<a href="http://127.0.0.1:8080/dist/"><button> Return to Blogs </button></a>');
    this.$el.html('<h2>' + this.model.get('title') + '</h2>').append('<p>' + this.model.get('content') + '</p>').append('<h6>' + 'Posted on: ' + this.model.get('date') + '</h6>').append($button);
    return this;
  }
});


module.exports = {
  'PostFormView': PostFormView,
  'PostListView': PostListView,
  'PostItemView': PostItemView,
  'PostDetailView': PostDetailView
};
