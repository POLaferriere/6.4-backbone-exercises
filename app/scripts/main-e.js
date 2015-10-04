import BlogCollection from 'models/blogs/blog-collection';
import CreateView from 'views/blogs/create-view';
import BlogListView from 'views/blogs/list-view';
import BlogZoomView from 'views/blogs/blog-zoom';

$(document).ready(function(){
  var blogs = new BlogCollection();
  blogs.fetch();

  var createView = new CreateView({
    collection: blogs
  });
  $('#container').append(createView.render().el);

  var blogListView = new BlogListView({
    collection: blogs
  });
  $('#container').append(blogListView.render().el);
});
