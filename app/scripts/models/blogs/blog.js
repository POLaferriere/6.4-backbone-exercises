var Blog = Backbone.Model.extend({
  defaults: {
    title: "",
    content: "",
  },

  validate: function(attributes){
    if(_.isEmpty(attributes.title)){
      return "You must write something";
    } else if(_.isEmpty(attributes.content)){
      return "You must write something";
    } else {
      return undefined;
    }
  },

  idAttribute: '_id',
});

export default Blog;
