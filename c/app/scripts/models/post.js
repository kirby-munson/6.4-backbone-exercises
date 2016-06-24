var Backbone = require('backbone');

var Post = Backbone.Model.extend({
  idAttribute:'_id',
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby-blogposts',
  initialize: function(){
    console.log('a new blog post is born!!');
  }
});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby-blogposts'
});

module.exports = {
  'Post': Post,
  'PostCollection': PostCollection
};
