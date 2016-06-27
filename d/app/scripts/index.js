var Backbone = require('backbone');
var views = require('./views/url');
var models = require('./models/url');
var $ = require('jquery');


var urls = new models.UrlCollection();

var urlForm = new views.UrlFormView({collection:urls});
$('.app').append(urlForm.render().el);

var urlList = new views.UrlListView({collection:urls});
$('.app').append(urlList.render().el);

urls.fetch();
