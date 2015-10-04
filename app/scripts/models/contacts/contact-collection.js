import Contact from 'models/contacts/contact';

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/POContacts',
});

export default ContactCollection;
