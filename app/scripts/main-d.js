import LinkCollection from 'models/links/link-collection';
import CreateLinkView from 'views/links/create';
import LinkTagView from 'views/links/links-and-tags';

$(document).ready(function() {
  var links = new LinkCollection();

  var createLinkView = new CreateLinkView({
    collection: links
  });
  $('#container').append(createLinkView.render().el);

  var linkTagView = new LinkTagView({
    collection: links
  });
  links.fetch();
  links.on('sync', function(){
  $('#container').append(linkTagView.render().el);
});
});
