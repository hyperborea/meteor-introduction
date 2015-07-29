Template.chat.events({
  'submit form': function (event, template) {
    event.preventDefault();

    var input = template.find('input');
    if (input.value !== "") {
      Messages.insert({
        content: input.value
      });
    }

    input.value = "";
  }
});


Template.chat.helpers({
  messages: function () {
    return Messages.find();
  }
});