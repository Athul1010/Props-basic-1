import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';


function App() {

  let title = "hello react";
  let val = 10;
  let handleSubmit = () =>{
    alert('Submitted successfully...!')
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={handleSubmit}>Submit</button>
      <hr/>
     <Component1 data={title} data1={val}/>
     <hr/>
     <Component2 data="Prop value to Component 2"/>
     <hr/>
     <Component3 data={handleSubmit}/>
    </div>
  );
}

export default App;
