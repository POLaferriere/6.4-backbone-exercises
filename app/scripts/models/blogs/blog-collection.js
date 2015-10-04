import Blog from 'models/blogs/blog';

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/PO'
});

export default BlogCollection;
