import MainView from 'views/main-view';

var CreateLinkView = MainView.extend({
  tagName: 'form',

  className: 'link-create',

  template: JST['links/create'],

  events: {
    'submit' : 'createContact'
  },

  createContact: function(e){
    console.log('sent');
    e.preventDefault();
    this.collection.create(this.getInfo(), {wait: true});
    this.$('input[type="text"]').val('');
  },

  getInfo: function(){
    var results = {};
    var info = this.$el.serializeArray();
    info.forEach(function(obj){
      results[obj.name] = obj.value;
    });
    return results;
  }
});

export default CreateLinkView ;
