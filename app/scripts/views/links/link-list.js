import MainView from 'views/main-view';
import ListItemView from 'views/links/list-item';

var LinkListView = MainView.extend({
  tagName: 'ul',

  template: JST['links/link-list'],

  render: function() {
    this.$el.html('');
    this.$el.html(this.template());
    this.renderChildren();
    return this;
  },

  renderChildren: function() {
    this.collection.forEach((link) => {
      var listItemView = new ListItemView({
        model: link
      });
      this.$el.append(listItemView.render().el);
    });
  },
});

export default LinkListView;
