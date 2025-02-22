import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import Task from './Task';
import styles from './styles';
import { loadTasks, saveTasks } from '../helpers/service';

const KeyboardView = () => {

    const [task, setTask] = useState('');
    const [taskItem, setTaskItem] = useState([]);

    useEffect(()=>{
      const fetchTasks = async () => {
        const storedTasks = await loadTasks();
        setTaskItem(storedTasks);
      };
      fetchTasks();
    }, []);

    useEffect(()=>{
      saveTasks(taskItem);
    }, [taskItem]);
    
    const handleAddTask = () => {
      if(task.trim()){
      Keyboard.dismiss();
      setTaskItem([...taskItem, task]);
      setTask('');
      }
    };
  
    const completeTask = (index) =>{
      let updatedTasks = [...taskItem]
      updatedTasks.splice(index, 1)
      setTaskItem(updatedTasks)
    };

  return (
    <View style={styles.container}>
    <View style={styles.textWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.items}>
        {
          taskItem.map((item, index) => {
            return(
              <TouchableOpacity onPress={() => completeTask(index)} key={index}>
                 <Task text={item}/>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.textWriteWrapper}
    >
      <TextInput 
      style={styles.input} 
      placeholder='Write a task' 
      placeholderTextColor='#ccc' value={task} 
      onChangeText={setTask}
      />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  </View>
  );
}

export default KeyboardView;