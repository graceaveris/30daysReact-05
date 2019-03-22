import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Relish from './Relish/Relish';


class App extends Component {
  state = {
    relishStyles: [
      { name: 'Branston Pickle', description: 'A british pickle that is brown in colour' },
      { name: 'Fruit Chutney', description: 'A chutney, surprisingly made of fruits' },
      { name: 'Onion Jam', description: 'A sweet chutney made of onions' },
      { name: 'Tomato Relish', description: 'A classic made with apples and tomatoes' },
      { name: 'Picalilli', description: 'Its a yellow one that tastes weird' },
      { name: 'Mango Chutney', description: 'A spicy one, served with Indian currys' },
  ],
}


//DELETE RELISH EVENTHANDLER
deleteRelishHandler = (relishIndex) => {
  //below we are copying the person state array, so we do not mutate the original data (this is best practise)
  const relishes = [...this.state.relishStyles];
  relishes.splice(relishIndex, 1);
  this.setState( { relishStyles: relishes } )
} 


render() {

  const style = {
  border: '2px solid white',
  borderRadius: '0px',
  width: '100px',
  height: '60px',
  fontSize: '30px'
  };


  let relishes = null;
  if (this.state.relishStyles.length > 0) {


  //RELISHES CONDITIONAL
  //This code renders if the relishState array is not empty 

  relishes = (
       <div>
        {this.state.relishStyles.map((relish, index) => {
          return <Relish
          name={relish.name}
          description={relish.description}
          click={() => this.deleteRelishHandler(index)}/>
        })} 
      </div> 
    );

  } else {

  //This code renders if the relishState IS empty

    relishes = (
      <div>
        <h1>DON'T FORGET ABOUT RELISH!</h1>
        <button
        style={style}
        onClick={() => window.location.reload()}>OK</button>
      </div>
    );
  }


//THE RETURN BLOCK
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Five / Relish Reminder</h2>
        </header>
    
        <div>
          {relishes}
        </div>


      </div>
    );
  }
}

export default App;








