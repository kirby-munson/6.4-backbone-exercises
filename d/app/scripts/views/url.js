var Backbone = require('backbone');
var $ = require('jquery');
var formTemplate = require('../templates/url.hbs');
var listTemplate = require('../templates/list.hbs');

var UrlFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit': 'addUrl'
  },
  render: function(){
    var renderedHTML = this.template;
    this.$el.html(renderedHTML);
    return this;
  },
  addUrl: function(event){
    event.preventDefault();
    this.collection.create({
      url:$('#url').val(),
      title:$('#title').val(),
      tag:$('#tag').val()
    });

    $('#url').val('');
    $('#title').val('');
    $('tag').val('');
  }
});

var UrlListView = Backbone.View.extend({
  tagName: 'dl',
  initialize : function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(url){
    var urlItem = new UrlListItemView({model:url});
    this.$el.append(urlItem.render().el);
  }
});

var UrlListItemView = Backbone.View.extend({
  tagName: 'dd',
  template: listTemplate,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

module.exports = {
  'UrlFormView': UrlFormView,
  'UrlListItemView': UrlListItemView,
  'UrlListView': UrlListView
};
