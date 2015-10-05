var LinkURL = Backbone.Model.extend({
  defaults : {
    url : '',
    title: '',
    tag: '',
  },

  validate: function(attributes){
    if(_.isEmpty(attributes.title)){
      return "You must write something";
    } else if(_.isEmpty(attributes.url)){
      return "You must write something";
    } else if(_.isEmpty(attributes.tag)){
      return "You must write something";
    } else {
      return undefined;
    }
  },

  idAttribute: '_id',
});

export default LinkURL;
