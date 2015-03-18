(function(views){
  //One item
 var ListItem = React.createBackboneClass({

  render: function(){
    return (
       React.createElement("li", {key: index}, name, " ", React.createElement("progress", {max: "1", value: "{progress}"}))
    );
  }
 });
  //whole list
 var List = React.createBackboneClass({

  getItem: function(model, index){
    return React.createElement(ListItem, {model: model, key: index});
  },

  render: function(){
     return (
      React.createElement("div", {className: "react-view"}, 
        React.createElement("ul", null, this.props.collection.map(this.getItem))
      )
    );
  }

 });

 views.ListItem=ListItem;
 views.List=List;

})(bullshit.views={});
