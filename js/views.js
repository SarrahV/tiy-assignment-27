var IssueView = Backbone.View.extend({

  tagName: "li", 
  template: JST["issue"],

   render: function() {
      var markup = this.template( this.model.toJSON() );
          console.log(markup);
       this.$el.html( markup );
       return this;
    }
});


    