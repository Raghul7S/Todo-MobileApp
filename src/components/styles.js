import {StyleSheet, Platform, StatusBar} from 'react-native';

import { fonts } from './helpers/Utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#060417',
        padding: 18
    },
    sectionTitle: {
        fontSize: 24,
        color: '#fff',
        fontFamily: fonts.bold,
        borderBottomWidth: 0.5,
        borderColor: '#fff',
        textAlign: 'center'
      }
});

export default styles;