import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      editing: false,
      newTodo:'',
      todos: [
        { id:1, name:"Karate"},
        {id:2, name:"Judo"},
        {id:3, name:"Kendo"}      
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
    this.updateTodo = this.updateTodo.bind(this);

  }

  handleChange(event){
    this.setState({
      newTodo: event.target.value
    })
  }

  addTodo(){
    const todos = this.state.todos;
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos[this.state.todos.length-1].id+1
    }

    todos.push(newTodo);

    this.setState({
      todos: todos,
      newTodo:''
    })
  }

  deleteTodos(index){
    let todos = this.state.todos;
    delete todos[index];
    this.setState({todos})
  }

  updateTodo(index){
    let todos = this.state.todos[index];
    this.setState({
      newTodo: todos.name,
      editing:true
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="container">
          <h2 className="text-center p-4">Todos App</h2>
          <input 
            name="todo"
            type="text"
            className="my-4 form-control" 
            placeholder= "Add new to do"
            onChange={this.handleChange}
            value={this.state.newTodo}  
          />
          <button
            onClick={this.addTodo}
            className="mb-4 btn btn-info">
            {this.state.editing == true ? 'Update to do' : 'Add to do'}
          </button>
          <ul className="list-group">
            {this.state.todos.map((item,index)=>{
              return <li key={item.id}  className="list-group-item">
                  {item.name} 
                  <button
                    onClick={()=>{this.updateTodo(index);}} 
                    className="btn btn-danger btn-sm ml-2">U</button>
                  <button
                    onClick={()=>{this.deleteTodos(index);}} 
                    className="btn btn-danger btn-sm ml-2">X</button>
              </li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
