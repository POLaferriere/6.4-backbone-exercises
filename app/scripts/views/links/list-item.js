import MainView from 'views/main-view';

var ListItemView = MainView.extend({
  tagName: 'li',

  className: 'link-item',

  template: JST['links/link-item'],

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default ListItemView;
