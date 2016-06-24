var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  idAttribute:"_id",
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/kirby-person',
  initialize: function(){
    console.log('a new person is born!');
  }
});

var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/kirby-person'
});

module.exports = {
  'Person':Person,
  'PersonCollection':PersonCollection
};
