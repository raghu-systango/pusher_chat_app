
import React from 'react';
import WelcomeView from './WelcomeView.js';
import MainView from './MainView.js'


export default class Chat extends React.Component {

constructor(props) {
  super(props);
  this.state = { 
     name: null
  }
}

  _onClick(){
    var input = document.getElementById('input-name');
    var name = input.value;
    this.setState({name: name});
  }

  _onName(e){
    if (e.nativeEvent.keyCode != 13) return;
    var name = e.target.value;
    this.setState({name: name});
  }

  render() {
    return (
      <div>
        <WelcomeView name={this.state.name} _onClick={this._onClick} _onName={this._onName} />
        <MainView name={this.state.name} />
      </div>
    );
  }

  
}
