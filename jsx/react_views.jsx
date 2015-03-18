(function(views){
  //One item
 var ListItem = React.createBackboneClass({

  render: function(){
    return (
       <li key={index}>{name} <progress max="1" value="{progress}"></progress></li>
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
      <div className="react-view">
        <ul>{this.props.collection.map(this.getItem)}</ul>
      </div>
    );
  }

 });

 views.ListItem=ListItem;
 views.List=List;

})(bullshit.views={});
