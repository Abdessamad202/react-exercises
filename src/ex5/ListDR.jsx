import { Employe,projets,types } from "./data";
export default function ListDR() {
  return <>
  <label htmlFor="">Types: </label>
  <select name="" id="">
    {types.map((element,index)=> <option key={index} value={element}>{element}</option> )}
  </select>
  <label htmlFor="">Projets: </label>
  <select name="" id="">
    {projets.map((element,index)=> <option key={index} value={element}>{element}</option> )}
  </select>
  <label htmlFor="">Employe: </label>
  <select name="" id="">
    {Employe.map((element,index)=> <option key={index} value={element}>{element}</option> )}
  </select>
  </>
}