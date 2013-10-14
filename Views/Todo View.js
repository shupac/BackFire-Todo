var TodoView = Backbone.View.extend({
  className: 'todo',
  template: _.template('<%= desc =>')
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(template(this.model.attributes));
  }
});