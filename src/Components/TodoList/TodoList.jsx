import React, {Component} from 'react';

class TodoList extends Component {

    componentDidUpdate() {
        // sets the focus in the input area so we can continue typing the next item in the todo list.
        this.props.inputElement.current.focus()
    }

    // form on submit, calls addItem

    render() {
        return (
            <div className="todoListMain">
                <div className="header"> 
                    <form onSubmit={this.props.addItem}> 
                        <input 
                            placeholder="Task"
                            // ref refers to the current element.
                            ref={this.props.inputElement} 
                            // valueis stored as text in the currentElementobject.
                            value={this.props.currentItem.text}
                            // onChangecalls handleInput
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList