$(function(){

  var issues = new IssuesCollection();

  issues.fetch().done(function(){

    issues.each(function(model){

      var issueView = new IssueView({model: model});
      $(".backbone-view").append(issueView.render().el);
      
    });
  });
});

// $(function(){

//   var issuesCollection = new bullshit.models.IssuesCollection();

//   var elem = React.createElement(bullshit.views.List, {
//     collection: issuesCollection
//   });

//   window.issuesCollection = issuesCollection;

//   React.render(elem, document.body);

// });