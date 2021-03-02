import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails'
import { NavigationContainer } from '@react-navigation/native';
import Header from '../shared/Header'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation, title }) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title = 'GameZone'/> ,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'aqua', height: 100 }
    }
})

export default HomeStack