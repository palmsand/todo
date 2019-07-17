/**The purpose of this component is that we have all the todos in the state, all we need is another component that can render these on the screen. 
 * Displaying todos in this component. 
 * We’ll call this component TodoItemsand pass all items as a prop.
 * Statefull component. 
 */

 import React, {Component} from 'react';

 class TodoItems extends Component {

    // add an onClick listener to delete Item with the key.
    // This executes deleteItem with the key as a parameter. 
    createTasks = item => {
        return(
            <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
                {item.text}
            </li>
        ) 
    }

    render() {

        const todoEntries= this.props.entries 
        // All these list items are saved to listItems using a mapping function.
        const listItems= todoEntries.map(this.createTasks)

        return <ul className="theList">{listItems}</ul>
    }
 }

 export default TodoItems