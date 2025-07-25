import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import KeyboardView from './src/Pages/Keyboard';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardView />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
