import React, { Component } from 'react';
class  Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count : 0,
      text : "",
      date: 0,
     }
  }
  

handleChange = (e) => {
    this.setState ({text: e.target.value})

};
handleData =() => {
    this.setState({show : !this.state.show});
}
   componentDidMount () {
   setInterval(() => {this.setState({date: this.state.date +1});
       
   }, 1000);
 }   
 
  render() { 
    return ( 
        <div>
           
            <h3> fullName </h3><input onChange = {this.handleChange}/>
            <h3> bio </h3><input onChange = {this.handleChange}/>
            <h3> profession </h3><input onChange = {this.handleChange}/>

            <h3>{this.state.test}</h3>
             <h1> {this.state.date} </h1>
        </div>
     );
  }
}
 
export default Counter;
 