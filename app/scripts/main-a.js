import BlogCollection from 'models/blogs/blog-collection';
import CreateView from 'views/blogs/create-view';

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  var blogs = new BlogCollection();

  var createView = new CreateView({collection: blogs});
  $('#container').append(createView.render().el);

});
