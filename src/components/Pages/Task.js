import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import dayjs from 'dayjs';

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

  return (
    <>
      <Text style={styles.dateText}>{formattedDate}</Text>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity onPress={toggleCompletion}>
            <View style={styles.square}>
              {isCompleted && <Image source={tickIcon} style={styles.icon} />}
            </View>
          </TouchableOpacity>
          {isEditing ? (
            <TextInput
              value={editText}
              onChangeText={setEditText}
              autoFocus
              numberOfLines={1}
              style={styles.editInput}
            />
          ) : (
            <Text
              style={styles.itemText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {text}
            </Text>
          )}
        </View>
        <View style={styles.iconContainer}>
          {isEditing ? (
            <TouchableOpacity onPress={handleSave} style={styles.circular}>
              <Image source={saveIcon} style={styles.icon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleEdit} style={styles.circular}>
              <Image source={editIcon} style={styles.icon} />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => onDelete(index)}
            style={styles.circular}>
            <Image source={deleteIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Task;
