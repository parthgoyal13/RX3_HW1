import { useSelector } from "react-redux";

const Tasks = () => {
  const tasksPerDay = useSelector((state) => {
    console.log(state.tasks.tasksPerday);
    return state.tasks.tasksPerday;
  });
  return (
    <div>
      {tasksPerDay.map((taskGroup) => (
        <div key={taskGroup.taskDate}>
          <h3>{taskGroup.taskDate}</h3>
          <ul>
            {taskGroup.tasks.map((task, index) => (
              <li key={index}>
                <p>{task.taskTitle}</p>

                <p>status:{task.taskStatus}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Tasks;
