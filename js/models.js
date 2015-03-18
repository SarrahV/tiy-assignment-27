var Issue = Backbone.Model.extend();

var IssuesCollection = Backbone.Collection.extend({

  url: "issues.json", 
  model: Issue
  
});

