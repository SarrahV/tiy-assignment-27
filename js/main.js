$(function(){

  var issues = new IssuesCollection();

  issues.fetch().done(function(){

    issues.each(function(model){

      var issueView = new IssueView({model: model});

      $(".backbone-view").append(issueView.render().el);
    });

  });

});
  // var issueView = new IssueView({model: issues.first()});
  // console.log(issues.toJSON());
  // $(".backbone-view").append(issueView.render().el);

  // });
