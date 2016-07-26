import React from 'react';
import {render} from 'react-dom';
import {Happy} from './components/happy_birthday.jsx';

class App extends React.Component {
  render () {
    return (
      <Happy name={'やっさん'} />
    );
  }
}

render(<App/>, document.getElementById('app'));
