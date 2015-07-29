Messages = new Mongo.Collection('messages');

Messages.before.insert(function (userId, doc) {
  var user = Meteor.users.findOne(userId);

  doc.createdAt = Date.now();
  if (user) {
    doc.userId = userId;
    doc.userName = user.emails[0].address;
  }
  else {
    doc.userId = false;
    doc.userName = 'Anonymous';
  }
});