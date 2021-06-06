import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks(prevState => [...prevState, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    const prevTasks = tasks.filter(task => task.id !== id);
    const task = tasks.find(task => task.id === id);

    if (task) {
      const taskDone = {
        ...task,
        done: !task.done,
      }

      setTasks([...prevTasks, taskDone]);
    }
  }

  function handleRemoveTask(id: number) {
    const newTasksList = tasks.filter(task => task.id !== id);

    setTasks(newTasksList);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}