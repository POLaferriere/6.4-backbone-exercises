import MainView from 'views/main-view';
import BlogZoomView from 'views/blogs/blog-zoom';


var ListItemView = MainView.extend({
  initialize: function(){
  },

  template: JST['blogs/list-item'],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    'click': 'showBlog'
  },

  showBlog: function() {
      $('.zoom-view').html('');
      var blogZoom = new BlogZoomView({
        model: this.model
      });
      $('#container').append(blogZoom.render().el);
    }
});

export default ListItemView;
