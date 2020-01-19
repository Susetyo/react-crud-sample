import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      editing: false,
      editingIndex: null,
      notification: null,
      newTodo:'',
      todos: [
        { id:1, name:"Karate"},
        {id:2, name:"Judo"},
        {id:3, name:"Kendo"}      
      ]
    }

    this.alert = this.alert.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
    this.editTodo = this.editTodo.bind(this);
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
      id: this.state.todos[this.state.todos.length-1] ? this.state.todos[this.state.todos.length-1].id+1 : 1
    }

    todos.push(newTodo);

    this.setState({
      todos: todos,
      newTodo:''
    })

    this.alert("Add is successful");
  }

  deleteTodos(index){
    let todos = this.state.todos;
    delete todos[index];
    this.setState({todos})
    this.alert("Deleted is successful");
  }

  editTodo(index){
    let todos = this.state.todos[index];
    this.setState({
      newTodo: todos.name,
      editing:true,
      editingIndex: index
    })
  }

  updateTodo(){

    let todo = this.state.todos[this.state.editingIndex];
    
    todo.name = this.state.newTodo;

    const todos = this.state.todos;

    todos[this.state.editingIndex] = todo;

    this.setState({
      todos: todos,
      editingIndex:null,
      editing:false,
      newTodo:''
    });

    this.alert("Updated is successful");
  }

  alert(notification){

    this.setState({
      notification: notification
    })

    setTimeout(()=>{
      this.setState({notification:null})
    },2000);

  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            LEARN CURD REACT
          </p>
        </header>
        <div className="container">
          <h2 className="text-center p-4">Todos App</h2>

          {
            this.state.notification &&
            <div className="alert alert-success">
              {this.state.notification}
            </div>
          }
          

          <input 
            name="todo"
            type="text"
            className="my-4 form-control" 
            placeholder= "Add new to do"
            onChange={this.handleChange}
            value={this.state.newTodo}  
          />
          <button
            onClick={this.state.editing == true ? this.updateTodo : this.addTodo }
            className="mb-4 btn btn-info">
            {this.state.editing == true ? 'Update todo' : 'Add todo'}
          </button>
          {
            !this.state.editing && 
            <ul className="list-group">
              {this.state.todos.map((item,index)=>{
                return <ListItem key={index} item={item} editTodo={()=>this.editTodo(index)} deleteTodos={()=>this.deleteTodos(index)} />
              })}
            </ul>
          }
        </div>
      </div>
    );
  }
}

export default App;
