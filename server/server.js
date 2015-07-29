Meteor.methods({
  'nuke': function () {
    Messages.remove({});
    GraphData.remove({});
  }
});