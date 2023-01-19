import logo from './logo.svg';
import './App.css';

function App() {
  const devs = ['Daniel','Cameron','Lucian','Marcus']
  return (
    <div className="App">
      <h1>React Devs for Hire</h1>
      <ul>
        {
          devs.map()
        }
      </ul>
    </div>
  );
}

export default App;
