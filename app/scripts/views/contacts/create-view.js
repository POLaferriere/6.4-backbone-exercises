var CreateView = Backbone.View.extend({
  tagName: 'form',
  className: 'create-view',

  template: JST['contact-create'],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  events: {
    'submit': 'createContact'
  },

  createContact: function(e){
    e.preventDefault();
    debugger;
    app.contacts.create(this.getInfo());
    this.$('input[type="text"]').val('');
  },

  getInfo: function(){
    var results = {};
    var info = this.$el.serializeArray();
    info.forEach(function(obj){
      results[obj.name] = obj.value;
    });
    results.name = results.firstName + ' ' + results.lastName;
    results.address = results.address + ', ' + results.city + ', ' + results.state + ' ' + results.zip;
    return _.pick(results, 'name', 'address', 'phoneNumber');
  }
});

export default CreateView;
