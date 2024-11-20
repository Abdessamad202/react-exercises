import { useState } from "react";
export default function Task(params) {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [incompletedTasks, setIncompletedTasks] = useState(taskList.filter(task => !task.completed).length);
  const handleChange = (e)=>{
    setTask(e.target.value)
  }
  const isChecked =(e)=>{
    if (e.target.checked) {
      setTaskList(prevTaskList =>
        prevTaskList.map(task =>
          task.id == e.target.id ? { ...task, completed: true } : task
        )
      );
    setIncompletedTasks(previncompletedTask => previncompletedTask - 1);

    }else{
    setIncompletedTasks(previncompletedTask => previncompletedTask + 1);

    }
  }
  const handleClick = () => {
    let taskObj = {
      description : task ,
      completed : false
    }
    if (taskList.length === 0 ){
      taskObj.id =1
    }else{
      taskObj.id = taskList[taskList.length - 1].id + 1
    }
    setTaskList(prevtaskList =>[...prevtaskList,taskObj])
    setTask("")
    setIncompletedTasks(previncompletedTask => previncompletedTask + 1);
  }
  // let incompletedTasks = taskList.filter(task =>task.completed == false).length
  return <>
        <input type="text" value={task} onChange={handleChange} placeholder="Add A Task ..." name="" id="" /> <button type="button" onClick={handleClick}>Ajouter</button>
        {console.log(taskList,incompletedTasks)
        }
        {taskList.length === 0 ? <div>there is no task added</div>: <>
          <ul> {taskList.map((element,index)=><li key={index}><input type="checkbox"  name=""  id={element.id} onChange={isChecked}/> {element.description} <button type="button">supprimer</button></li>)}</ul>
          {incompletedTasks == 0  ? <div>all tasks are finished</div> : <div>there are {incompletedTasks} tasks left</div>}
        </>
        }
        {}
        </>
}