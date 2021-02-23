import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './src/navigation/Navigation'
import Splash from './src/screen/Splash/Splash';


const App = (props) => {

  const [screen , setScreen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setScreen(true)
    }, 3000);
  }, [])

  // return <Splash />
  return (
    <>
    {screen === false ? <Splash /> : <Navigation />}
    </>
  )
}

export default App

const styles = StyleSheet.create({})
