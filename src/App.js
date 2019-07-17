import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import TodoItems from './Components/TodoItems/TodoItems';

// container for all components
// statefull component

// All components will go inside the div in this return statement.

// This addItemshould be handled at the App component. It is passed to other components as a prop.

// This must exist in App to pass. Create a addItem property in the App.We have to bind the form manually through the constructor with ES6. 

 // We still need the state to hold the array of items. 

class App extends Component {

  inputElement = React.createRef()

  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text:'', 
        key:''
      },
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    
    const currentItem = { 
      text: itemText, 
      key: Date.now() 
    }

    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem

    if(newItem.text !== '') {
      // If it’s not empty
      console.log(newItem)
      // items array is destructured and newItemis added.
      const items = [...this.state.items, newItem]

      // We have to set this items[] to the state, we call this.setSate.
      this.setState({
        items:items,
        // reset the currentItemto clear the input box
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteItem = key => {
    // It filters the received key from the items state. 
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })

    // sets the items to filtered items.
    this.setState ({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList 
        addItem={this.addItem} // addItemto handle click on add.
        inputElement={this.inputElement} // inputElement to refer to this element.
        handleInput={this.handleInput} // handleInputto handle data on input field on a change.
        currentItem={this.state.currentItem} // currentItemto display the value of the state set to currentItem.
        />

        <TodoItems entries={this.state.items}
        deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default App;
