import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import dayjs from 'dayjs';
import {Swipeable} from 'react-native-gesture-handler';

import styles from './styles';

const tickIcon = require('../assets/images/check-mark.png');
const saveIcon = require('../assets/images/bookmark.png');
const editIcon = require('../assets/images/edit.png');
const deleteIcon = require('../assets/images/delete.png');

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
        <Image source={deleteIcon} style={{width: 18, height: 18}} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEdit} style={[styles.swipeAction, {backgroundColor: 'blue'}]}>
        <Image source={editIcon} style={{width: 18, height: 18}} />
      </TouchableOpacity>
    </View>
  );

  const renderLeftActions = () => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onDelete(index)} style={[styles.swipeAction, {backgroundColor: 'red'}]}>
        <Image source={tickIcon} style={{width: 18, height: 18}} />
      </TouchableOpacity>
    </View>
  )

  return (
     <Swipeable overshootRight={false} overshootLeft={false} renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
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
              ellipsizeMode="tail">
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
