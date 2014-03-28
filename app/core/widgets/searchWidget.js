define([
  'backbone'
],
function(Backbone) {

  "use strict";

  return Backbone.Layout.extend({
    template: Handlebars.compile(' \
      <button type="button" class="tool-item large-circle"> \
        <span class="icon icon-search"></span> \
      </button> \
      <input class="font-primary" type="text" value="keyword">'
    ),

    tagName: 'li',
    attributes: {
      'class': 'input-and-button'
    },

    serialize: function() {
      return this.options.widgetOptions;
    }
  });
});