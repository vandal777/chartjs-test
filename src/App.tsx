import './App.css';
import TimeGraph from './components/TimeGraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '100%' }}>
          <TimeGraph />
        </div>
      </header>
    </div>
  );
}

export default App;
