import LinkURL from 'models/links/link';

var LinkCollection = Backbone.Collection.extend({
  model: LinkURL,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/PO',
});

export default LinkCollection;
