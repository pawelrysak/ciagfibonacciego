import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {

constructor(props){
super(props);
this.state = {
  a : '',
  number : ''
}
this.handleSubmit = this.handleSubmit.bind(this);
this.updateInput = this.updateInput.bind(this);
}

handleSubmit(){

console.log('Your input value is: ' + this.state.number)

let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= this.state.number; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
this.setState({a : n1})

}

updateInput(event){
  this.setState({number : event.target.value})
}

render() {
return (
<div className="App">
<p>Podaj liczbe calkowita n w celu obliczenia n-tego elementu ciagu: </p>
<input type="text" onChange={this.updateInput}></input>
<input value="Oblicz" type="submit" onClick={this.handleSubmit} ></input>
<p>Wartosc n-tego elementu ciagu: {this.state.a}</p>
</div>
);
}
}
export default App;
