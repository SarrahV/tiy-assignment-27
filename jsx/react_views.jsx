(function(views){
  //One item
 var ListItem = React.createBackboneClass({

  render: function(){
    return (
      <li>
        {this.props.model.get("name")} <progress max="1" value={this.props.model.get("progress")}></progress>
      </li>
    );
  }
 });
  //whole list
 var List = React.createBackboneClass({

  getItem: function(model, index){
    return <ListItem model={model} key={index}/>;
  },

  render: function(){
    return (
      <ul>{this.props.collection.map(this.getItem)}</ul>
    );
  }

 });

 views.ListItem=ListItem;
 views.List=List;

})(bullshit.views={});
