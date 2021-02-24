import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name:"Mahee Nur",
    job: "Programmer"
  }
  var style = {
    color:'gold',
    backgroundColor:'blue',
    padding:'10px'
  }
  // destructuring the object
  const {name,job}=person ;
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="" style={style}>My Name is {name}</p>
        <p style={{backgroundColor:'gold',color:'black'}}>My job is {job}</p>
        <p>My first react lesson {98-89}</p>
        <Myinfo></Myinfo>
      </header>
      
    </div>
    
  );
  function Myinfo(){
    return <h4 style={{padding:'10px',border:'2px solid white'}}>Hello world I am Jahidun Nur Mahee and currently i am learning React!</h4>
  }
}

export default App;
