import MainView from 'views/main-view';

var CreateView = MainView.extend({
  tagName: 'form',
  className: 'create-view',

  template: JST['blogs/create-template'],

  events: {
    'submit' : 'createPost'
  },

  createPost: function(e){
    e.preventDefault();
    this.collection.create(this.getInfo(), {wait: true});
    this.$('input[type=text], textarea').val('');
    // this.collection.add(this.getInfo());
  },

  getInfo: function(){
    var info = {};
    var results = this.$el.serializeArray();
    results.forEach(function(obj){
      info[obj.name] = obj.value;
    });
    return info;
  },
});

export default CreateView;
