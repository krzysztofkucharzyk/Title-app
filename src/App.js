import React, {Component} from "react";
import './App.css';
import ButtonPanel from './ButtonPanel';
import Title from './Title';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: null
    }
  }

  changeColor = (event) => {
    this.setState((prevState) => {
      let changedColor = prevState.color;

      if(event === 'red') {
        console.log('Kolor red')
      } else if (event === 'blue') {
        console.log('Kolor blue')
      } else {
        console.log('Kolor green')
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
        <Title />
        <ButtonPanel changeColor={this.changeColor}/>
      </div>
    );
  }

}


export default App;
