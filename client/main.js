Template.main.events({
  'submit form': function(event, template) {
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


Template.main.helpers({
  messages: function() {
    return Messages.find();
  }
});