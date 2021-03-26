import { useState } from 'react';
import './App.css';
import TimeGraph from './components/TimeGraph';

function App() {
  const [unit, setUnit] = useState('hour');

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '100%' }}>
          <TimeGraph unit={unit} />
          <select id="unit" onChange={(e) => setUnit(e.target.value)}>
            <option value="second">Second</option>
            <option value="minute">Minute</option>
            <option value="year">Year</option>
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
