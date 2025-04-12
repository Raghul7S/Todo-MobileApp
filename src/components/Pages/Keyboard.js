import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

import Task from './Task';
import {loadTasks, saveTasks} from '../helpers/service';
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
      setTaskItem([...taskItem, {text: task, completed: false}]);
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

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.sectionTitle}>Your Task's</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.items}>
            {taskItem.map((item, index) => (
              <Task
                key={index}
                text={item.text}
                index={index}
                onDelete={deleteTask}
                onUpdate={updateTask}
                onComplete={completeTask}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.textWriteWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          placeholderTextColor="#ccc"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default KeyboardView;
