import MainView from 'views/main-view';
import LinkListView from 'views/links/link-list';
import TagListView from 'views/links/tag-list';
import TagCollection from 'models/tags/tag-collection';

var LinkTagView = MainView.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },

  className: 'link-tag-view',

  render: function() {
    // debugger;
    this.$el.html('');
    this.renderChildren();
    return this;
  },

  renderChildren: function() {
    var linkList = new LinkListView({
      collection: this.collection
    });
    this.$el.append(linkList.render().el);

    var tagList = new TagListView({
      collection: this.collection
    });
    this.$el.append(tagList.render().el);
  },

  // showTags: function() {
  //   _.each(_.keys(_.groupBy(this.collection.toJSON(), 'tag')), (tag) => {
  //     this.$el.append('<h4>' + tag + '</h4>');
  //   })
  // }
});

export default LinkTagView;
