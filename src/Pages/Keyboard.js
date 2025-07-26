import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from 'react-native';

import {loadTasks, saveTasks} from '../components/helpers/service';

import Task from './Task';
import Container from '../components/Container';
import styles from './styles';

const KeyboardView = () => {
  const [task, setTask] = useState('');
  const [taskItem, setTaskItem] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      setTaskItem(storedTasks);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTasks(taskItem);
  }, [taskItem]);

  const handleAddTask = () => {
    if (task.trim()) {
      Keyboard.dismiss();
      setTaskItem(
        [...taskItem, 
          {
            text: task, 
            completed: false,
            createdAt: Date.now(),
        }]
      );
      setTask('');
    }
  };

  const deleteTask = index => {
    let updatedTasks = [...taskItem];
    updatedTasks.splice(index, 1);
    setTaskItem(updatedTasks);
  };

  const updateTask = (index, newText) => {
    let updatedTasks = [...taskItem];
    updatedTasks[index].text = newText;
    setTaskItem(updatedTasks);
  };

  const completeTask = (index, isCompleted) => {
    let updatedTasks = [...taskItem];
    updatedTasks[index].completed = isCompleted;
    setTaskItem(updatedTasks);
  };

  const renderItem = ({item, index}) => (
    <Task
      text={item.text}
      index={index}
      date={item.createdAt}
      onDelete={deleteTask}
      onUpdate={updateTask}
      onComplete={completeTask}
    />
  );

  return (
    <Container>
      <View style={styles.items}>
        <FlatList
          data={taskItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.textWriteWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          placeholderTextColor="#B6B09F"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default KeyboardView;
