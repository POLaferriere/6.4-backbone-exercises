import MainView from 'views/main-view';

var TagItemView = MainView.extend({
  tagName: 'li',

  className: 'tag-item',

  template: JST['links/tag-item'],

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    'click': 'filterCollection',
  },

  filterCollection: function(){
    var newArr = _.filter(this.collection.toJSON(), (obj) => {
      return obj.tag === this.model.toJSON().tag;
    });
    this.collection.reset();
    this.collection.add(newArr);
  },
});

export default TagItemView;
