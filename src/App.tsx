import { useState } from 'react';
import './App.css';
import TimeGraph from './components/TimeGraph';

function App() {
  const [unit, setUnit] = useState('hour');
  const [update, setUpdate] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '100%' }}>
          <TimeGraph unit={unit} update={update} />
          <select id="unit" onChange={(e) => setUnit(e.target.value)}>
            <option value="second">Second</option>
            <option value="minute">Minute</option>
            <option value="year">Year</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="month">Month</option>
          </select>
          <button onClick={() => setUpdate(Math.random())}>update</button>
        </div>
      </header>
    </div>
  );
}

export default App;
