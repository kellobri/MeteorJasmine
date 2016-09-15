Template.body.onCreated(function() {
  Meteor.subscribe("tasks");
});

Template.body.helpers({
  tasks: function() {
    return Tasks.find({}, {sort: { createdAt: -1 }});
  },
  incompleteCount: function() {
    return Tasks.find({completed: {$ne: true}}).count();
  }
});

Template.body.events({
  "submit .new-task": function (event) {
    event.preventDefault();

    //Get value from form element
    var text = event.target.text.value;

    //Insert a task into the Collection
    Meteor.call("addTask", text);

    //Clear form
    event.target.text.value = "";
  }
});

Template.task.events({
  "click .toggle-checked": function() {
    Meteor.call("setCompleted", this._id, ! this.completed);
  },
  "click .delete": function () {
    Meteor.call("deleteTask", this._id);
  }
});
