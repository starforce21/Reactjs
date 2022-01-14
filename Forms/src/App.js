import React from 'react'
import './App.css';
import FormControl from './components/FormControl'
import FormUncontrol from './components/FormUncontrol';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <h3 className='cfh'>Controlled Form</h3>
        <FormControl />

        <h3 className='ucfh'>Uncontrolled Form</h3>
        <FormUncontrol />

      </div>
    );
  }
}

export default App;
