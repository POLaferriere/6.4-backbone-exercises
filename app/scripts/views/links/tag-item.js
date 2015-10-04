import MainView from 'views/main-view';

var TagItemView = MainView.extend({
  tagName: 'li',

  template: JST['links/tag-item'],

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default TagItemView;
