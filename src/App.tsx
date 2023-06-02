import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { GlobalStyle } from "./styles/global";
import { useState } from "react"

export interface Itask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Itask[]>([
    {
      id: "teste",
      title: "teste",
      isCompleted: true,
    },
    {
      id: "teste2",
      title: "teste2",
      isCompleted: false,
    }
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(), /* Criar o id sem biblioteca */
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById}/>
      <GlobalStyle />
    </>
  );
}

export default App;
