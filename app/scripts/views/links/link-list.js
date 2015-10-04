import MainView from 'views/main-view';
import ListItemView from 'views/links/list-item';

var LinkListView = MainView.extend({
  tagName: 'ul',

  render: function() {
    this.renderChildren();
    return this;
  },

  renderChildren: function() {
    this.$el.html('');
    this.collection.forEach((link) => {
      var listItemView = new ListItemView({
        model: link
      });
      this.$el.prepend(listItemView.render().el);
    });
  },
});

export default LinkListView;
