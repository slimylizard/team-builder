import React, {useState} from 'react';
import './App.css';
import Card from './components/component.js'

function App() {
  const [team, setTeam] = useState ([
    {name: 'Kobe', email: 'kobe@gmail.com', role: 'SG'},
    {name: 'Lebron', position: 'lebron@gmail.com', role: 'PF'},
  ]);
  return (
    <div className="App">
      {team.map(member => <Card member={member} />)}
    </div>
  );
}

export default App;