import { personnel } from "./data";
import { useState } from "react";

export default function List() {
  const [state, setState] = useState("");
  const [result, setResult] = useState(null); // Use null instead of an array to match the output of `find`

  const handleSelectChange = (e) => {
    const selectedMatricule = parseInt(e.target.value);
    setState(selectedMatricule); // Update the selected matricule
    const foundPersonnel = personnel.find(
      (element) => element.Matricule === selectedMatricule
    );
    setResult(foundPersonnel || null); // Set result to the found object or null if not found
  };

  return (
    <>
      <h1>Liste Du Personnel</h1>
      <label htmlFor="select">Rechercher par matricule: </label>
      <select onChange={handleSelectChange} name="select" id="select">
        <option value="">-- Choisir une matricule --</option>
        {personnel.map((element, index) => (
          <option key={index} value={element.Matricule}>
            {element.Matricule}
          </option>
        ))}
      </select>
      <br />
      {console.log(result,state)}

      {result ? (
        <>
          <label htmlFor="">Matricule: </label>
          <input type="text" value={result.Matricule} readOnly />
          <br />
          <label htmlFor="">Nom: </label>
          <input type="text" value={result.Nom} readOnly />
          <br />
          <label htmlFor="">Prenom: </label>
          <input type="text" value={result.Prenom} readOnly />
          <br />
          <label htmlFor="">Service: </label>
          <input type="text" value={result.Service} readOnly />
          <br />
        </>
      ) : (
        <div>Aucun personnel correspondant trouvé</div>
      )}
    </>
  );
}
