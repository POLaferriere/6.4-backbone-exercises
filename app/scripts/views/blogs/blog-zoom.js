import MainView from 'views/main-view';

var BlogZoomView = MainView.extend({
  className: 'zoom-view',

  template: JST['blogs/list-item'],

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

export default BlogZoomView;
