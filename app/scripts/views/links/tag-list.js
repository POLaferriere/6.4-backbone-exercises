import MainView from 'views/main-view';
import TagItemView from 'views/links/tag-item';
import Tag from 'models/tags/tag';

var TagListView = MainView.extend({
  tagName: 'ul',

  render: function(){
    this.renderChildren();
    return this;
  },

  renderChildren: function(){
    this.$el.html('');
    var keysArr = _.keys(_.groupBy(this.collection.toJSON(), 'tag'));
    debugger;
    keysArr.forEach((tag) => {
      var tagItemView = new TagItemView({
        colletion: this.collection,
        model: new Tag({
          tag: tag
        })
      });
      this.$el.append(tagItemView.render().el);
    });
  }
});

export default TagListView
