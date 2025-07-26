import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather'
import {Swipeable} from 'react-native-gesture-handler';

import styles from './styles';

const Task = props => {
  const {text, onUpdate, index, onComplete, onDelete, date} = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmedText = editText.trim();

    if (trimmedText.length === 0) {
      setEditText(text);
      setIsEditing(false);
      return;
    }

    onUpdate(index, trimmedText);
    setIsEditing(false);
  };

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
    onComplete(index, !isCompleted);
  };

  const formattedDate = dayjs(date).format('DD/MM/YYYY');

  const renderRightActions = () => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onDelete(index)} style={[styles.swipeAction, {backgroundColor: 'red'}]}>
        <FeatherIcon name='edit' size={22} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEdit} style={[styles.swipeAction, {backgroundColor: 'blue'}]}>
        <Icon name='done' size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const renderLeftActions = () => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onDelete(index)} style={[styles.swipeAction, {backgroundColor: 'red'}]}>
        <FeatherIcon name="trash" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  )

  return (
     <Swipeable 
      overshootRight={false} 
      rightThreshold={40}
      leftThreshold={40}
      overshootLeft={false} 
      renderLeftActions={renderLeftActions} 
      renderRightActions={renderRightActions}
      friction={2}
      onSwipeableLeftOpen={()=>onDelete()}
     >
      <View style={styles.item}>
          {isEditing ? (
            <TextInput
              value={editText}
              onChangeText={setEditText}
              autoFocus
              numberOfLines={1}
              style={styles.editInput}
            />
          ) : (
            <View style={styles.taskContainer}>
            <Text
              style={styles.itemText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {text}
            </Text>
            <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
          )}
      </View>
      </Swipeable>
  );
};

export default Task;
