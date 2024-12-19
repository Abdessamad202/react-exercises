import { useRef, useState } from "react";
export default function Tp(params) {
  const [nom, setNom] = useState('');
  const [prenom,setPrenom] = useState('');
  const welcome = useRef();
  console.log(welcome);

  // let welcome = ""
  const handleNameChange = (e) => {
    setNom(e.target.value);
  }
  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  }
  const handleClick = (e) => {
    e.preventDefault();
    if(nom === '' || prenom === '') {
      welcome.current.innerHTML = `vous devez remplir tous les champs`;
    }else{

      welcome.current.innerHTML = ` vous etes ${nom} ${prenom}`
    }
    // welcome = ` vous etes ${nom} ${prenom}`;
  }
  return (
      <>
        <form>
          <label>Nom :</label>
          <input type={"text"}  id={"nom"} value={nom} onChange={handleNameChange} />
          <label>Prenom :</label>
          <input type={"text"}  id={"prenom"} value={prenom} onChange={handlePrenomChange}/>
          <button onClick={handleClick} id={"prenome"}  type="submit">ajouter</button>
        </form>
      <div id="welcome" ref={welcome}></div>
      </>
  )
};
