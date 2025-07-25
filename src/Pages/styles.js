import {StyleSheet} from 'react-native';

import { fonts } from '../components/helpers/Utils';

const styles = StyleSheet.create({
  items: {
    marginBottom: 100,
  },
  textWriteWrapper: {
    bottom: 8,
    position: 'absolute',
    width: '110%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  itemText: {
    flex: 1,
    fontFamily: fonts.semiBold,
    fontSize: 15,
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
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
