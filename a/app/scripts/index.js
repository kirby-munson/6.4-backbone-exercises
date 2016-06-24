var Backbone = require('backbone');
var Post = require('./models/blog').Post;
var PostCollection = require('./models/blog').PostCollection;
var PostFormView = require('./views/blog').PostFormView;
var $ = require('jquery');


var posts = new PostCollection();
var blogForm = new PostFormView({collection: posts});
$('.app-form').append(blogForm.render().el);
