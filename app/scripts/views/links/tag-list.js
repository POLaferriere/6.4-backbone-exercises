import MainView from 'views/main-view';
import TagItemView from 'views/links/tag-item';
import Tag from 'models/tags/tag';

var TagListView = MainView.extend({
  tagName: 'ul',

  template: JST['links/tag-list'],

  render: function(){
    this.$el.html('');
    this.$el.html(this.template());
    this.renderChildren();
    return this;
  },

  renderChildren: function(){
    var keysArr = _.keys(_.groupBy(this.collection.toJSON(), 'tag'));
    keysArr.forEach((tag) => {
      var tagItemView = new TagItemView({
        collection: this.collection,
        model: new Tag({
          tag: tag
        })
      });
      this.$el.append(tagItemView.render().el);
    });
  }
});

export default TagListView
