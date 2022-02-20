import React,{useState} from 'react'
import './App.css';

const App=()=> {
  const [input,setInput]=useState("");
  const [result,setResult]=useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div >
      <center>
        <h2> THIS IS A MINI CALCULATOR</h2>
        <br></br>
        
        <input type="text" value={input} name="input" onChange={handler}/>
        <br></br>
        <button onClick={()=> setResult(eval(input))}>Result</button>
        <h1> result is :{result}</h1>
        <br></br>
        <button onClick={()=> setInput(input+"1")}>1</button>
        <button onClick={()=> setInput(input+"2")}>2</button>
        <button onClick={()=> setInput(input+"3")}>3</button>
        <button onClick={()=> setInput(input+"4")}>4</button> 
        <button onClick={()=> setInput(input+"5")}>5</button>
        <br></br>
        <button onClick={()=> setInput(input+"6")}>6</button>
        <button onClick={()=> setInput(input+"7")}>7</button>
        <button onClick={()=> setInput(input+"8")}>8</button>
        <button onClick={()=> setInput(input+"9")}>9</button> 
        <button onClick={()=> setInput(input+"0")}>0</button>
        <br></br> 
        <button onClick={()=> setInput(input+"+")}>+</button>
        <button onClick={()=> setInput(input+"-")}>-</button>
        <button onClick={()=> setInput(input+"*")}>*</button>
        <button onClick={()=> setInput(input+"/")}>/</button> 
        <button onClick={()=> setInput("")}>cle</button>
        <br></br>
      </center>
    </div>
  );
}

export default App;
