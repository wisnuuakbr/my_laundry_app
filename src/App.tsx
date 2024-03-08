import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/index.tsx';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      // animated={true}
      // backgroundColor="transparent"
      // barStyle={'dark-content'}
      // translucent={true}
      />
      <Router />
    </NavigationContainer>
  )
}

export default App