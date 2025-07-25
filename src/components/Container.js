import React from 'react';
import { StatusBar, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

export default function Container({children, style}) {

    return(
        <SafeAreaView style={[styles.container, style]}>
             <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <Text style={styles.sectionTitle}>Your Task's</Text>
            {children}
        </SafeAreaView>
    )
}