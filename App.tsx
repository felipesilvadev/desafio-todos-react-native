import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  const deviceTheme = useColorScheme();

  return (
    <>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home deviceTheme={deviceTheme} />
    </>
  );
}
