var Backbone = require('backbone');

var Url = Backbone.Model.extend({
  idAttribute:'_id',
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby-url',
  initialize: function(){
    console.log('an new URL has been born!');
  }
});

var UrlCollection = Backbone.Collection.extend({
  model: Url,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby-url'
});


module.exports = {
  'Url': Url,
  'UrlCollection': UrlCollection
};
