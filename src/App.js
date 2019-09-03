import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: 'Andrew',
      todo: []
    }

    
  }

  toggleItem = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addItem = taskName => {
    const newToDo = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newToDo]
    })
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    })
  }


  render() {
    return (
      <div className = 'App'>
      <div className = 'header'>
        <h2>Welcome to {this.state.name}'s Todo App!</h2>
        <TodoForm addItem={this.addItem} />
      </div>
      
      <TodoList
      todo={this.state.todo}
      toggleItem={this.toggleItem}
      clearCompleted={this.clearCompleted}
      />
      </div>
      

    );
  }
}

export default App;
