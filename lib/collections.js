Tasks = new Mongo.Collection("tasks");

Meteor.methods({
  addTask: function (text) {
    Tasks.insert({
      text: text,
      createdAt: new Date()
    });
  },
  deleteTask: function (taskId) {
    var task = Tasks.findOne(taskId);

    Tasks.remove(task);
  },
  setCompleted: function (taskId, setCompleted) {
    var task = Tasks.findOne(taskId);

    Tasks.update(taskId, { $set: { completed: setCompleted }});
  }
})
