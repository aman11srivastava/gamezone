import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/About';
import Header from '../shared/Header'
import React from 'react'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation, title }) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title = "About GameZone"/> ,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'aqua', height: 100 }
    }
})

export default AboutStack;