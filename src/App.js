import React, {Component} from "react";
import './App.css';
import ButtonPanel from './ButtonPanel';
import Title from './Title';
import './Title.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: "orange"
    }
  }

  changeColor = (event) => {

    this.setState(() => {
      let changedColor = this.state.color;

      if(event === 'red') {
        changedColor = "red";
      } else if (event === 'blue') {
        changedColor = "blue"
      } else {
        changedColor = "green"
      }

      return ({
        color: changedColor
      })
           

    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Title Color App</h1>
        </header>
        <Title color={this.state.color}/>
        <ButtonPanel changeColor={this.changeColor}/>
      </div>
    );
  }

}


export default App;
