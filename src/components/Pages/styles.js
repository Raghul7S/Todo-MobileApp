import {StyleSheet} from 'react-native';

import {fonts} from '../helpers/Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: fonts.bold,
  },
  items: {
    marginTop: 25,
    marginBottom: 120,
  },
  textWriteWrapper: {
    bottom: 30,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#E8EAED',
    padding: 15,
    borderRadius: 16,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    color: '#000',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    flex: 1,
    fontFamily: fonts.semiBold,
    marginRight: 5,
  },
  circular: {
    width: 24,
    height: 24,
    borderColor: '#55bcf6',
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  editInput: {
    flex: 1,
    fontFamily: fonts.semiBold,
    color: '#000',
  },
  dateText: {
    fontSize: 12,
    marginBottom: 4,
  },
});

export default styles;
