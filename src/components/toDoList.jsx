import React, { Component } from "react";
import ToDoItem from "./new";
import AddItemForm from "./form";
import axios from 'axios';
import "../App.css"
export default class ToDoList extends Component {
  state = {
    toDoList: [
      { id: 201, title: "grocery", completed: false },
      { id: 202, title: "Study", completed: true },
      { id: 203, title: "wash the car", completed: false }
    ],
    sort : true ,
    mainToDoList : [],
  };
  
  async componentDidMount() {
    const {data,status} = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(data,status);
    const toDoList = [...data]
    this.setState({toDoList,mainToDoList:data})
  }
  
  addItem = data => {
    const toDoList = [data, ...this.state.toDoList];
    this.setState({ toDoList });
  };

  handleDelete = async listItem => {
    const provisoire = this.state.toDoList
    const exmain = this.state.mainToDoList
    const toDoList = this.state.toDoList.filter(
      item => item.id !== listItem.id
    );
    const mainToDoList = this.state.mainToDoList.filter(
      item => item.id !== listItem.id
    );
    this.setState({ toDoList , mainToDoList});
    try
    {const {status} = await axios.delete("https://jsonplaceholder.typicode.com/todos/" + listItem.id)
     console.log(listItem);
     console.log(status);}
    catch(err)
     { 
       console.log(err);
       this.setState({toDoList : provisoire,mainToDoList : exmain})}
  };

  handleDone = listItem => {
    const toDoList = this.state.toDoList;
    const index = this.state.toDoList.findIndex(
      item => item.id === listItem.id
    );
    toDoList[index].completed = !toDoList[index].completed;
    this.setState(toDoList);
    console.log(toDoList[index]);
  };

  handleEdit = (listItem,newValue) => {
    const toDoList = this.state.toDoList;
    const index = this.state.toDoList.findIndex(
      item => item.id === listItem.id
    );
      toDoList[index].title = newValue ;
      this.setState(toDoList);
  }
  
  sortByChecked(key){
    const {toDoList,sort} = this.state
    let newlist = toDoList
    console.log(key)
    if (sort) {
      newlist = toDoList.sort((a,b) => a.completed - b.completed)
    } else {
      newlist = toDoList.sort((a,b) => b.completed - a.completed)
    }
    this.setState({
      sort : !sort ,
      toDoList : newlist
    })
  }

  ShowChecked = (e) => {
    const id = e.currentTarget.id
    let toDoList = []
    if(id==="checked")
      toDoList = this.state.mainToDoList.filter(item => item.completed)
    else if(id==="unchecked")
      toDoList = this.state.mainToDoList.filter(item => !item.completed)
    else
      toDoList=this.state.mainToDoList
      this.setState({toDoList})
  }


  render() {
    return (
      <div className="mt-4">
        <AddItemForm addItem={this.addItem} />
        
        <div 
        style = {{left:400}}
        className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary active">
        <input type="radio" name="options" id="all" checked onClick={this.ShowChecked}/> ALL
      </label>
      <label 
      className="btn btn-secondary">
        <input type="radio" name="options" id="checked" onClick={this.ShowChecked}/> CHECKED
      </label>
      <label className="btn btn-secondary">
        <input type="radio" name="options" id="unchecked" onClick={this.ShowChecked}/> UNCHECKED
      </label>
      <label
        className="btn btn-secondary"
        onClick = {() => this.sortByChecked()}
        >SORT</label>
    </div>
        
        <div>
          <ul className="list-group mtt-4">
            {this.state.toDoList.map(listItem => (
              <ToDoItem
                key = {listItem.id}
                listItem={listItem}
                handleDone={this.handleDone}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            ))}
          </ul>
        </div>
       
      </div>
    );
  }
}
