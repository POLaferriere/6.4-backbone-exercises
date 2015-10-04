import BlogCollection from 'models/blogs/blog-collection';
import ListView from 'views/blogs/list-view';

$(document).ready(function() {
  var blogs = new BlogCollection();
  blogs.fetch();

  var listView = new ListView({
    collection: blogs
  });

  $('#container').append(listView.render().el);
});
