import MainView from 'views/main-view';

var BlogZoomView = MainView.extend({
  className: 'zoom-view',

  template: JST['blogs/zoom-item'],

  editTemplate: JST['blogs/zoom-edit'],

  render: function(){
    this.$el.html('');
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  renderEdit: function(){
    this.$el.html('');
    this.$el.html(this.editTemplate(this.model.toJSON()));
    return this;
  },

  events: {
    'click button[data-behavior="destroy-blog"]': 'deletePost',
    'click button[data-behavior="edit-blog"]': 'renderEdit',
    'click button[data-behavior="update-post"]': 'updatePost',
  },

  deletePost: function(){
    this.model.destroy();
    this.collection.remove(this.model);
    this.remove();
  },

  updatePost: function(e){
    e.preventDefault();
    console.log('submit');
    this.model.set(this.getInfo());
    this.model.save();
    this.render();
  },

  getInfo: function(){
    var inputName = this.$('input').attr('name');
    var inputVal = this.$('input').val();
    var textName = this.$('textarea').attr('name');
    var textVal = this.$('textarea').val();
    var info = {};
    info[inputName] = inputVal;
    info[textName] = textVal;
    debugger;
    return info;
  },
});

export default BlogZoomView;
