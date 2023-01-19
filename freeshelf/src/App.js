import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App(props) { 
  const [devs, setDevs] = useState([
  {name: 'Daniel', expertise:'JS, beats'},
  {name:'Cameron', expertise:'JS,  Soccer'},
  {name:'Lucian', expertise:'JS, Corny Memes'},
  {name:'Marcus', expertise:'JS, Comic Books'},
])
  return (
    <div className="App">
      <h1>React Devs for Hire</h1>
      <div className='dev-list' id ='dev-list'>
        {devs.map(dev => <Developer name={dev.name} expertise={dev.expertise}/>)}
      </div>
    </div>
  );
}

function Developer({name, expertise}){

  const[expanded, setExpanded] = useState(false)
  const handleClick = () => setExpanded(!expanded)
  return(
    <div onClick={handleClick} style={{border: 'solid 1px silver', margin: '5px', padding:'10px'}}> 
            <p>{name}</p>
            { expanded && <p>{expertise}</p>}
        </div>
  )

}
export default App;
