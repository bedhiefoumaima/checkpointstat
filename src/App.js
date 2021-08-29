import './App.css';
import Counter from './Components/Counter';
import React, { Component } from 'react'

class App extends Component {
 state={show:false}
 handleData=()=> {
   this.setState({show: !this.state.show})

 }
 componentDidMount () {
   alert("mounted")
 }
  render() { 
    return ( 
     <div className="App">
       <button onClick={this.handleData}> {this.state.show? "Hide":"Show"} </button>
       {this.state.show?<Counter/> : null}
     </div>

    );
  }
}
 
export default App;

