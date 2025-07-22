import {StyleSheet} from 'react-native';

import {fonts} from '../helpers/Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060417',
  },
  textWrapper: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    paddingHorizontal: 15,
    fontFamily: fonts.bold,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: '#fff'
  },
  items: {
    marginTop: 16,
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
    backgroundColor: '#fffdfdff',
    flexDirection: 'row',
    alignItems: 'center'
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
    backgroundColor: '#fffdfdff',
    padding: 16,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    color: '#000'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
  itemText: {
    flex: 1,
    fontFamily: fonts.semiBold,
    marginRight: 5,
  },
  editInput: {
    flex: 1,
    fontFamily: fonts.semiBold,
    color: '#000',
  },
  dateText: {
    fontSize: 12,
    color: '#696969',
  },
  swipeAction: {
    
  }
});

export default styles;
