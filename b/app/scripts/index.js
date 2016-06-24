var Backbone = require('backbone');
var PersonCollection = require('./models/person').PersonCollection;
var Person = require('./models/person').Person;
var PersonFormView = require('./views/person').PersonFormView;
var $ = require('jquery');


var persons = new PersonCollection();
var peopleForm = new PersonFormView({collection: persons});
$('.app-form').append(peopleForm.render().el);
