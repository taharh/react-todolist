import React from "react";
import { Button } from 'reactstrap';
import { Component } from "react";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edited : false
    }
  }
  

  renderForm(){
    return(
      <form onSubmit={(e) => this.updateItem(e)} >
      <input type="text" ref={(value) => this.input = value} defaultValue={this.props.listItem.title}/>
      <button type="submit">UPDATE</button>
      </form>
    );
  }

  updateItem = (e) => {
      e.preventDefault();
      this.props.handleEdit(this.props.listItem,this.input.value);
      this.changeEdit();                                                                                                                       
  }

  renderItem() {
    return(
      <li
      key={this.props.listItem.id}
      className={
        this.props.listItem.done ? "list-group-item list-group-item-danger" : "list-group-item"
      }
  >
  
  <span>{this.props.listItem.title}</span>
  <div
  style = {{
    position:"absolute",
    right:30,
      top:5}}>
      <button
      
      type="button"
      className="btn btn-danger"
      onClick={() => this.props.handleDelete(this.props.listItem)}
      >
    DELETE
  </button>

  <button
      type="button"
      className={this.props.listItem.completed ? "btn btn-info" : "btn btn-secondary"} //{`btn btn-${listitem.done?"info":"primary"}
      onClick={() => this.props.handleDone(this.props.listItem)}
    >
      {this.props.listItem.completed ? "CHECK" : "UNCHECK"}
    </button>

    <Button outline color="success" onClick = {() => this.changeEdit()}>
        EDIT
    </Button>

    </div>
  </li>
    );
  }

  changeEdit(){
    this.setState({
      edited : !this.state.edited
    })
  }
  render(){
    const edited = this.state.edited;
    return (
      <section>
    {
      edited ? this.renderForm() : this.renderItem()
    }
     </section>
  );
      }
}
export default ToDoItem;
