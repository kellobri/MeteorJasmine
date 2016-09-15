describe ("the todo page : update task", function() {

  describe ("completing a task", function() {

    beforeEach(function() {
      Meteor.call('fixtures.createTask');
    });

    afterEach(function() {
      Meteor.call('fixtures.destroyTasks');
    });

    it ("should set the 'completed' field to true", function(done) {
      Meteor.setTimeout(function() {
        // activate the checkbox
        $('li').find("input:checkbox").click();

        // find the associated record in the DB and verify it is checked
        var tasks = Tasks.find().fetch();
        expect(tasks.length).toEqual(1);
        expect(tasks[0].completed).toEqual(true);

        // ensure the checkbox is now checked
        expect($('li').find("input:checkbox").is(':checked')).toEqual(true);
        done();
      }, 400);
    });

    it ("should show a strike-through for the completed tasks", function(done) {
      Meteor.setTimeout(function() {
        $('li').find("input:checkbox").click();
      }, 400);

      Meteor.setTimeout(function() {
        expect($('li').hasClass('checked')).toBe(true);
        done();
      }, 800);
    });
    
  });

})
