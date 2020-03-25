import React, { Component } from "react";

export default class AddItemForm extends Component {
  state = {
    data: {
      id: null,
      title: "",
      done: false
    }
  };
  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    data.id = Date.now();
    this.setState({ data });
  };

  handleSubmit(e) {
    e.preventDefault();
    const newItem = { ...this.state.data };
    if (newItem.title !== "") {
      this.props.addItem(newItem);
    }
    this.setState({ data: { title: "", id: null } });
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="add-item-form">
        <input
          value={this.state.data.title}
          name="title"
          className="form-control"
          type="text"
          placeholder="ADD ITEM"
          onChange={e => this.handleChange(e)}
        />
        <button
          style={{
            position:"center",
            left:400,
            display:"block"}}
          disabled={this.state.data.title === ""}
          className="btn btn-warning m1-3"
          id="addb"
          
        >
          ADD
        </button>
      </form>

    );
  }
}
