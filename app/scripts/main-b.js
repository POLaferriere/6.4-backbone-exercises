var ContactCollection = require('models/contacts/contact-collection');
import CreateView from 'views/contacts/create-view'

window.app = {};

$(document).ready(function(){
  app.contacts = new ContactCollection();

  var createView = new CreateView();
  $('#container').append(createView.render().el);
});
