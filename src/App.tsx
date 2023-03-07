import React from 'react';
import { Message } from './Components/Message';
import './App.css';
import { Person } from './Components/Person';
import { NameList } from './Components/NameList';

function App() {
  const personName = {
    first: 'Vishambar',
    last: 'Dutt',
  }
  const nameList = [
    {
      first: 'Vishambar',
      last: 'Dutt',
    },
    {
      first: 'Vartika',
      last: 'Jakhmola',
    },
    {
      first: 'Yutika',
      last: 'Jakhmola',
    }
]
  return (
    <div className="App">
     
      <Message name="Vishambar" coinCount={10000} isCoin={false}/>
      <Person name={personName}/>
      <NameList names={nameList} />
    </div>
  );
}

export default App;
