GraphData = new Mongo.Collection('graphData');

GraphData.allow({
  insert: function (userId, doc) {
    return userId;
  }
});