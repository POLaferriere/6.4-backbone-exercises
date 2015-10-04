import Tag from 'models/tags/tag';

var TagCollection = Backbone.Collection.extend({
  model: Tag,
});

export default TagCollection;
