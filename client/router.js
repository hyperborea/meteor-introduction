function render(main) {
  FlowLayout.render('layout', {main: main});
}


FlowRouter.route('/', {
  action: function () {
    FlowRouter.go('/chat');
  }
});

FlowRouter.route('/chat', {
  action: function () {
    render('chat');
  }
});

FlowRouter.route('/graph', {
  action: function () {
    render('graph');
  }
});