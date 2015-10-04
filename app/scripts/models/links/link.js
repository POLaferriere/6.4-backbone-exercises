var LinkURL = Backbone.Model.extend({
  defaults : {
    url : '',
    title: '',
    tag: '',
  },

  idAttribute: '_id',
});

export default LinkURL;
