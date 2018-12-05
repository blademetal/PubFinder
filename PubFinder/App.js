import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { NavigatorIOS, Text, TouchableHighlight, View, StatusBar, AsyncStorage } from 'react-native'
import Home from './src/screens/Home'
import PlaceDetail from './src/screens/PlaceDetail'
import Opinion from './src/screens/Opinion'
import AddComment from './src/screens/AddComment'
import Dinner from './src/screens/Dinner'
import Favourites from './src/screens/Favourites'
import HomeMap from './src/screens/HomeMap'
import RouteMap from './src/screens/RouteMap'
import pubs from './src/mock/pubs'

global.React = React

StatusBar.setBarStyle('light-content')
console.disableYellowBox = true

const Navigator = createStackNavigator({
  Home,
  HomeMap,
  RouteMap,
  PlaceDetail,
  Favourites,
  Opinion,
  AddComment,
  Dinner
}, {
  headerLayoutPreset: 'center',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'orange'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '400'
    },
    headerBackTitle: ''
  },
  cardStyle: {
    backgroundColor: '#fff'
  }
})

export default class App extends Component {
  render () {
    return (
      <Navigator />
    )
  }
}