var Contact = Backbone.Model.extend({
  defaults: {
    name: "",
    address: "",
    phoneNumber: "",
  },

  idAttribute: '_id',
});

export default Contact;
