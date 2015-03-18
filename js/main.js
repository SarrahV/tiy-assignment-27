$(function(){

  var issues = new IssuesCollection();

  issues.fetch().done(function(){

    issues.each(function(model){

      var issueView = new IssueView({model: model});
      $(".backbone-view ul").append(issueView.render().el);
      
    });
  });
});

$(function(){

  var issuesCollection = new bullshit.models.IssuesCollection();

  var elem = React.createElement(bullshit.views.List, {
    collection: issuesCollection
  });

  issuesCollection.fetch().done(function(){
    React.render(elem, document.querySelector('.react-view'));
  });
});