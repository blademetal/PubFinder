import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { colors } from '../config'
import { MapView, Location, Permissions } from 'expo'
const { Marker, Callout } = MapView
import Navbar from '../components/Navbar'
import MainButtonRow from '../components/MainButtonRow'
import ListItem from '../components/ListItem'
import List from '../components/List'
import ShowRouteMap from '../components/ShowRouteMap'
import BackButton from '../components/BackButton'
import pubs from '../mock/pubs'

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 90
    },
    headerTintColor: '#fff',
    headerTitle: <Navbar pageName='' favourites={true} marginLeft={125} />,
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: 100
    },
    headerLeft: <BackButton />
  }

  render () {
    return (
      <View style={styles.container}>
        <ShowRouteMap />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
})
