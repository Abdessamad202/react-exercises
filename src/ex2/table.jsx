import Etudiant from "./Etudiant";
import Header from "../ex1/header";
import "./style.css";
import React from 'react';
// export default function Table() {
//   const etudiants = [
//     new Etudiant(2, 'Alami ouafae', 12),
//     new Etudiant(3, 'Saoudi ahmed', 16),
//     new Etudiant(4, 'Hassan sara', 17),
//   ];
//   return <>
//     <Header color="red"> Liste des Étudiants</Header>
//     <table border="1" className="student-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Nom</th>
//               <th>Note</th>
//             </tr>
//           </thead>
//           <tbody>
//             {etudiants.map((etudiant) => (
//               <tr key={etudiant.id}>
//                 <td>{etudiant.id}</td>
//                 <td>{etudiant.nom}</td>
//                 <td>{etudiant.note}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </>
// }
export default class Table extends React.Component {
  etudiants = [
        new Etudiant(2, 'Alami ouafae', 12),
        new Etudiant(3, 'Saoudi ahmed', 16),
        new Etudiant(4, 'Hassan sara', 17),
      ];
  render() {
    return (
      <>
    <Header color="red"> Liste des Étudiants</Header>
    <table border="1" className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {this.etudiants.map((etudiant) => (
              <tr key={etudiant.id}>
                <td>{etudiant.id}</td>
                <td>{etudiant.nom}</td>
                <td>{etudiant.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
    )
  }
}