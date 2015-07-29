Meteor.methods({
  'nuke': function () {
    Messages.remove({});
  }
});