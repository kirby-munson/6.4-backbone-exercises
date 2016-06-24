var Backbone = require('backbone');
var formTemplate = require('../templates/form.hbs')
var $ = require('jquery');

var PersonFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit':'addPerson'
  },
  render: function(){
    var renderHTML = this.template();
    this.$el.html(renderHTML);
    return this;
  },
  addPerson: function(event){
    event.preventDefault();
    this.collection.create({
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      address: $('#address').val(),
      phoneNumber: $('#phoneNumber').val()
    });

    $('#firstName').val('');
    $('#lastName').val('');
    $('#address').val('');
    $('#phoneNumber').val('');
  }
});

module.exports = {
  'PersonFormView': PersonFormView
};
