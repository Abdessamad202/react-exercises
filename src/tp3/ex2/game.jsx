import "./style.css";
import { useState } from 'react'
export default function Game(params) {
  const data = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 7, 9, 5],
    6: [1, 3, 4, 6, 7, 9]
  };
  const keys = Object.keys(data);

  // Pick a random key
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const [chance, setChance] = useState(3);
  const [elements, setElements] = useState([]);
  const [face, setFace] = useState(randomKey);
  // Pick a random element from the array of the chosen key
  // const randomElement = data[randomKey];
  const handleClick = () => {
    if (elements.length != face && chance > 0) {
      const element = data[randomKey]
      setElements(element)
      setChance(prevchance => prevchance -1)
      console.log(elements);
    }

  }
  const replay = ()=>{
    setFace(randomKey)
    setElements([])
    setChance(3)
  }
  return <>
    {/* {console.log(randomElement, face)} */}
    <div className="container">
      <div className="square ">
        {elements.map((element, index) => (
          <div key={element} className={`child${element}`}>
            <div className="circle"></div>
          </div>
        ))}


      </div>
      <h2>jeu de De</h2>
      <h4>face : {face}</h4>
      <h4>Nombre d'essais : {chance}</h4>
      <button type="button" onClick={handleClick}>jouer</button>
      {elements.length == face  ? <> <h4 style={{color : "green"}}>congratulations</h4><button onClick={replay}>replay</button></> : chance === 0 ? <><h4 style={{color : "red"}}>game over try again</h4><button  onClick={replay}>replay</button> </>: ""}
    </div>
  </>
}