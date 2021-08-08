//import logo from './logo.svg';
import React from 'react';
import './App.css';

//create a class component

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
       text:'',
       key:'' 

      }
    }
    //bind key word to constructor
    this.handleInput = this.handleInput.bind(this);
    //bind key word to constructor
    this.addItem = this.addItem.bind(this);
  }
  //handleInput and addItems functions adds items to To-do List
  //called when you type input into field
  handleInput(e){
    //change state variable
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  //called when you click add button
  addItem(e){
    e.preventDefault(); //prevents page refreshing when you click add button
    const newItem = this.state.currentItem;
    console.log(newItem);
    //check if newItem.text is empty if not add to list
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItems]; //destructuring assignment 
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })   
    }
  }

  render(){
    return (
        <div className="App">
          <header>
            <form id="to-do-form">
              <input type="text" placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}/>
              <button type="sumbit">Add</button>
            </form>
        </header>
        </div>
    );
  }
}

export default App;
