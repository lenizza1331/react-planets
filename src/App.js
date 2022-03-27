import './App.css';
import { data } from "./data";
import { useState } from "react";

function App() {

const [planet, setPlanet] = useState(0);
const {id, title, image, description} = data[planet];
const [showMore, setShowMore] = useState(false);




const goBack =  ()=>{
  setPlanet((planet => {
    planet--;
    if (planet < 0){
      return data.length - 1;
    }
    return planet
  }))
}

const goNext = ()=>{
  setPlanet((planet=>{
    planet++;
    if (planet > data.length-1){
      planet = 0;
    }
    return planet;
  }))
}


  return (
    <div className='container'>
    <div className='page' key={id}>


      {/* <div className='center'>
      <h1>Планеты солнечной системы</h1>
      </div> */}

      <div className='center'>
        <h2>{title}</h2>
      </div>

      <div className='center picture'>
        <img src={image} alt="solar system" />
      </div>

      <div className='center'>
        <p>
        {showMore ? description : description.substring(0,310)+"..."} <button className='btn' onClick={()=> setShowMore(!showMore)}> { showMore ? "Скрыть текст..." :  "Читать дальше..."} </button>
        </p>
      </div>

      <div className='between'>
        <button onClick={goBack}>Назад</button>
        <button onClick={goNext}>Вперед</button>
      </div>


    </div>
    </div>
  );
}

export default App;
