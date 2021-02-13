import React, { Component } from 'react';
import "./Styles/Styles.css"
import Header from "./Components/Header"; 
import Todo from "./Components/Todos"; 
import Submit from "./Components/Submit"
class App extends Component {
  state = {
    tasks: ['TOUR OF BRAZIL ', 'TOUR OF ITALY ', 'TOUR OF PARIS ', 'TOUR OF COLORADO', 'TOUR MY HOUSE']
  };

  handleSubmit = task =>{
    this.setState({tasks: [...this.state.tasks, task]});
  }
  handleDelete = (index) => {
    const newArr= [...this.state.tasks];
    newArr.splice(index, 1); 
    this.setState({tasks: newArr}); 
  }
  render() {
    return(
    
     
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length} />
          <Todo tasks={this.state.tasks} onDelete={this.handleDelete} />
          <Submit onFormSubmit = {this.handleSubmit} />
          <p>HopeFully these Goals came to reality. I wish the best for every one.</p>
        </div>
      </div>
      
    );
  } 
}
export default App;