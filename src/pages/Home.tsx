import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface HomeProps {
  deviceTheme: 'light' | 'dark' | null | undefined;
}

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home({ deviceTheme }: HomeProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (deviceTheme) {
      deviceTheme === 'dark' ? 
        setIsDarkTheme(true) : 
        setIsDarkTheme(false);
    }
  }, [deviceTheme]);

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

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
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        }
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasksList = tasks.filter(task => task.id !== id);

    setTasks(newTasksList);
  }

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: isDarkTheme ? '#10101E' : '#FFF'
      }
    ]}>
      <Header isDarkTheme={isDarkTheme} handleTheme={handleTheme} />

      <TodoInput isDarkTheme={isDarkTheme} addTask={handleAddTask} />

      <MyTasksList
        isDarkTheme={isDarkTheme}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});