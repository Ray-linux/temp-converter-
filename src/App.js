import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputTemp, setInputTemp] = useState(0);
  const [inputUnit, setInputUnit] = useState("celsius");
  const [outputTemp, setOutputTemp] = useState("");
  const [outputUnit, setOutputUnit] = useState("");

  const inputValue  = (e) => {
    setInputUnit(e.target.value);
  }
  
  const outputValue = (e) => {
    setOutputUnit(e.target.value);
  }


  const calc = () => {
    let res;
    if(inputUnit === "celsius" && outputUnit === "fahrenheit"){
      res = toFahrenheit();
      setOutputTemp(res);
    }
    else if(inputUnit === "fahrenheit" && outputUnit === "celsius"){
      res = toCelsius();
      setOutputTemp(res);
    }
  }

  const toFahrenheit = () => {
    return (inputTemp * 9 / 5) + 32;
  }

  const toCelsius = () => {
    return (inputTemp - 32) * 5 / 9;
  }



  useEffect(() => {
    if(outputUnit === "celsius"){
      setInputUnit("fahrenheit")
    }
    else if(outputUnit === "fahrenheit"){
      setInputUnit("celsius")
    }
  }, [outputUnit])

  // for input values 
  useEffect (() => {
    if(inputUnit === "celsius"){
      setOutputUnit("fahrenheit")
    }
    else if(inputUnit === "fahrenheit"){
      setOutputUnit("celsius")
    }
  }, [inputUnit])

  
  const convert = (e) => {
    e.preventDefault()
    calc()
  }

  return (
    <>
    <div className="container">
      <h2>Temperature Converter</h2>
      <form>
        <div className="from">
        <select name="f_unit" id="" onChange = {(e) => inputValue(e)} value={inputUnit}>
          <option value="celsius">°Celsius</option>
          <option value="fahrenheit">°Fahrenheit</option>
        </select>
        <input type="number" name='temp' placeholder='0' onChange={(e) => setInputTemp(e.target.value)}/>
        </div>
        <div className="to">
        <select name="l_unit" id="" onChange={(e) => outputValue(e)} value={outputUnit}>
          <option value="celsius">°Celsius</option>
          <option value="fahrenheit">°Fahrenheit</option>
        </select>
        <input type="number" name='temp' readOnly onChange={(e) => setOutputTemp(e.target.value)} value={outputTemp}/>
        </div>
        
        <button className='btn' onClick={(e) => convert(e)}>Convert</button>
      </form>
    </div>
    </>
  );
}

export default App;
