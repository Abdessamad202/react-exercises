import { Taches } from "./data";
export default function TableTache(params) {
  return <>
  <table border="1">
    <thead>
      <tr>
        <th>Code tache</th>
        <th>date tache</th>
        <th>resume</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
        {Taches.map((element)=>{return<>
      <tr>
          <td>{element.Code}</td>
          <td>{element.Date}</td>
          <td>{element.Resumé}</td>
          <td>{element.Durée}</td>
      </tr>
        </>
        })}
    </tbody>
  </table>
  </>
}