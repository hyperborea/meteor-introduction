Meteor.publish('messages', function () {
  return Messages.find();
});

Meteor.publish('graphData', function () {
  return GraphData.find();
});