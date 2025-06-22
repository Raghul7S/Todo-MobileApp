import React from 'react';
import {View} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import KeyboardView from './src/components/Pages/Keyboard';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <KeyboardView />
    </GestureHandlerRootView>
  );
};

export default App;
