var Backbone = require('backbone');
var $ = require('jquery');


var PostDetailView = Backbone.View.extend({
  render: function(){
    var $button = $('<a href="http://127.0.0.1:8080/dist/"><button> Return to Blogs </button></a>')
    this.$el.html('<h1>' + this.model.get('title') + '</h1><br />' + '<p class="blog-content">' + this.model.get('content') + '"<p/>').append($button);
    return this;
  }
});

module.exports = {
  'PostDetailView': PostDetailView
};
