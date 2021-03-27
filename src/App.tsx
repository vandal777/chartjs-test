import { useState } from 'react';
import './App.css';
import TimeGraph from './components/TimeGraph';
import { dataTime } from './conts/const';

function App() {
  const [unit, setUnit] = useState('second');
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '100%' }}>
          <TimeGraph dataCreada={dataTime[unit]} />
          <select id="unit" onChange={(e) => setUnit(e.target.value)}>
            <option value="second">Second</option>
            <option value="minute">Minute</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="month">Month</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default App;
