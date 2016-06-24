var Backbone = require('backbone');

var Post = Backbone.Model.extend({
  idAttribute:"_id",
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/kirby-post',
  initialize: function(){
    console.log('A new Blog post is born!')
  }
});

var PostCollection = Backbone.Collection.extend({
  model:Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/kirby-post'
});

module.exports = {
  'Post': Post,
  'PostCollection': PostCollection
};
