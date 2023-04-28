
import React,{useState} from 'react'; 
// import Data from './Data';

function App() {
  const [count,setcount]=useState(0)
  function dec(){
    setcount(count-1);
  }
  function inc(){
    setcount(count+1);
  }
  return (
    <div className="App">
      {/* <Data name='darshita' rollno='101' bio='lorem01'/>
      <br/>
      <Data name='ARUn' rollno='120' bio='lorem02'/>

      <br/>
      <Data name='Aditya' rollno='120' bio='lorem04'/>
       */}
       <button onClick={dec}>-</button>
       <button>{count}</button>
       <button onClick={inc}>+</button>

      
      {/* <Data/>
      
      <Data/> */}
    </div>
  );
}

export default App;
