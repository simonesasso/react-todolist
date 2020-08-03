import React from 'react';
import './App.css';
import ListItems from './listItems.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text: "",
        key: "",
        color: "red",
        decoration: "none"
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.setDone = this.setDone.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now(),
        color: "red",
        decoration: "none"
      }
    })
  }
  addItem(e){
    // per non far ricaricare la pagina
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text: "",
          key: "",
          color: "red",
          decoration: "none"

        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems,
    })
  }
  setUpdate(text, key){
    const items = this.state.items;
    items.map(item => {
      if (item.key===key && item.color === "red") {
        item.text = text;
      }
      this.setState({
        items: items,
      })
    })
  }
  setDone(key){
    const items = this.state.items;
    items.map(item => {
      if (item.key===key && item.color === "red") {
        item.color = "green";
        item.decoration = "line-through";
      }else if (item.key===key && item.color === "green") {
        item.color = "red";
        item.decoration = "none";
      }
      this.setState({
        items: items,
      })
    })
  }
  render() {
    return(
      <div className="container">
       <div className="header">
        <form onSubmit={this.addItem}>
         <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} className="headerinput"/>
         <button type="submit" onSubmit={this.addItem} className="button">Add</button>
        </form>
       </div>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} setDone={this.setDone}></ListItems>
      </div>
    )
  }
}


export default App;
