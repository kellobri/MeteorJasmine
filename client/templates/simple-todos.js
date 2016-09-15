Template.body.onCreated(function() {
  Meteor.subscribe("tasks");
});

Template.body.helpers({
  tasks: function() {
    return Tasks.find({}, {sort: { createdAt: -1 }});
  }
});

Template.body.events({
  "submit .new-task": function (event) {
    event.preventDefault();
  }
})
