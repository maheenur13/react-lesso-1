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

  const arrayOfName = ['Jahidun','Mahee','Eraa','Shohaib','Ashik','Suzon'];
  const singleName =arrayOfName.map(name=>name);
  console.log(singleName);

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            arrayOfName.map(name=> <li>{name}</li>)
          }
        </ul>
        <p className="" style={style}>My Name is {name}</p>
        <p style={{backgroundColor:'gold',color:'black'}}>My job is {job}</p>
        <p>My first react lesson {98-89}</p>
        <Myinfo name={arrayOfName[0]} job="programmer"></Myinfo>
        <Myinfo name={arrayOfName[1]} job="Super women"></Myinfo>
        
      </header>
      
    </div>
    
  );
  
}
function Myinfo(props){
  return (
  <div style={{border:'2px solid white',width:'450px',margin:'10px',padding:'15px'}}> 
  <h4 style={{padding:'10px',border:'2px solid white'}}>{props.name}</h4>
  <h5>{props.name+" "+ props.job}</h5>
  </div>
  )
}

export default App;
