import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import SlideShow from './components/SlideShow';
import { useState } from 'react';

function App() {
  const [obj,setObj] = useState({title:"SlideShow", version:"1.0"});

  const handleChangeVersion = ()=>{
    delete obj.version;
    setObj({...obj});
  }
  return (
    <div className="App">
        <h2 style={{textAlign:"center"}}>{obj.title} v{obj.version}</h2>
        <button onClick={handleChangeVersion}>Delete version</button>
        <SlideShow/>
    </div>
  );
}

export default App;
