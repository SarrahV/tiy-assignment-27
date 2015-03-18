var Issue = Backbone.Model.extend({ //this is the model for one issue

});

var IssuesCollection = Backbone.Collection.extend({

  url: "../issues.json", model: Issue

});