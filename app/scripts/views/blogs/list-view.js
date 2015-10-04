import MainView from 'views/main-view';
import ListItemView from 'views/blogs/list-item';


var ListView = MainView.extend({
  className: 'list-view',

  template: JST['blogs/list-template'],

  render: function(){
    this.$el.html('');
    this.renderChildren();
    return this;
  },

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
  },

  renderChildren: function(){
    this.collection.forEach((blog) => {
      var listItemView = new ListItemView({
        model: blog,
        collection: this.collection,
      });
      this.$el.prepend(listItemView.render().el);
    });
  },
});

export default ListView;
