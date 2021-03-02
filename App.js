import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { View, Text } from 'react-native';
import About from './screens/About';
import Navigator from './routes/drawer'

const getFonts = () => Font.loadAsync({
    'regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })

export default function App() {
 
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return <Navigator/>
  }
  else {
    return (
      <AppLoading
       startAsync = {getFonts}
      onFinish = {() => setFontsLoaded(true)}
      onError = {console.warn}
    />
    )
  }
}