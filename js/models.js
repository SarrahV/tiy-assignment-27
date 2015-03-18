var Issue = Backbone.Model.extend();

var IssuesCollection = Backbone.Collection.extend({

  url: "issues.json", 
  model: Issue
  
});


bullshit.models={};

(function(models){

  var Issue = Backbone.Model.extend();

  var IssuesCollection = Backbone.Collection.extend({

    url: "issues.json", 
    model: Issue
    
  });

  models.IssuesCollection=IssuesCollection;
  models.Issue=Issue;

})(bullshit.models);

