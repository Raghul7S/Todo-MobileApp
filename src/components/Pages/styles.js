import {StyleSheet, StatusBar, Platform} from 'react-native';

import {fonts} from '../helpers/Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060417',
    padding: 8
  },
  textWrapper: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '',
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: fonts.bold,
    borderBottomWidth: 0.5,
    borderColor: '#fff',
    color: '#fff'
  },
  items: {
    marginBottom: 120,
  },
  textWriteWrapper: {
    bottom: 8,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  taskContainer: {
    flexDirection: 'row'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    color: '#000',
    fontFamily: fonts.semiBold,
  },
  addWrapper: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    paddingVertical: 18,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#000',
    borderBottomWidth: 0.5,
    borderColor: '#fff',
  },
  itemText: {
    flex: 1,
    fontFamily: fonts.semiBold,
    marginRight: 5,
    color: '#fff'
  },
  editInput: {
    flex: 1,
    fontFamily: fonts.semiBold,
    color: '#fff'
  },
  dateText: {
    fontSize: 12,
    color: '#696969',
  },
  swipeAction: {
    paddingHorizontal: 8,
    justifyContent: 'center'
  }
});

export default styles;
