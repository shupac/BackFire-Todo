var TodoList = Backbone.Firebase.Collection.extend({
  model: Todo,
  firebase: "https://.firebaseio.com"
});