Template.graph.onCreated(function() {
  Session.setDefault('chartType', 'line');
});


function changeChartType(type) {
  return function () {
    Session.set('chartType', type);
  };
}


Template.graph.onRendered(function() {
  var chart = c3.generate({
    bindto: this.find('.chart'),
    data: {
      columns: [
        ['random'],
      ]
    }
  });

  this.autorun(function() {
    var data = GraphData
      .find({}, { sort: {ts: -1}, limit: 10 })
      .map(function (o) { return o.value });

    chart.load({ 
      columns: [ ['random'].concat(data) ],
      type: Session.get('chartType')
    });
  });
});


Template.graph.events({
  'click .js-generate': function (event, template) {
    GraphData.insert({
      value: Math.floor((Math.random() * 10) + 1),
      ts: Date.now()
    });
  },

  'click .js-line' : changeChartType('line'),
  'click .js-area' : changeChartType('area'),
  'click .js-bar'  : changeChartType('bar'),
});