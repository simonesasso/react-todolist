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
        key: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
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
          key: ""
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
      if (item.key===key) {
        item.text = text;
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
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
      </div>
    )
  }
}


export default App;
