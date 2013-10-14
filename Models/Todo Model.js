var Todo = Backbone.Model.extend({
  defaults: {
    desc: "todo",
    status: "incomplete",
    created: new Date()
  }
});
