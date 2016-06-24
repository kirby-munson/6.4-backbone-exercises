var Backbone = require('backbone');
var formTemplate = require('../templates/form.hbs');
var $ = require('jquery');

var PostFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit':'addPost'
  },
  render: function(){
    var renderedHTML = this.template();
    this.$el.html(renderedHTML);
    return this;
  },
  addPost: function(event){
    event.preventDefault();
    this.collection.create({
      title: $('#title').val(),
      author: $('#author').val()
    });

    title: $('#title').val('');
    author: $('#author').val('');
  }
});

module.exports = {
  'PostFormView': PostFormView
};
