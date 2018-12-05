import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { colors } from '../config'
import { MapView, Location, Permissions } from 'expo'
const { Marker, Callout } = MapView
import Navbar from '../components/Navbar'
import MainButtonRow from '../components/MainButtonRow'
import BackButton from '../components/BackButton'
import ListItem from '../components/ListItem'
import List from '../components/List'
import pubs from '../mock/pubs'

export default class Favourites extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 90
    },
    headerTintColor: '#fff',
    headerTitle: <Navbar pageName='' favourites={false} />,
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: 100
    },
    headerLeft: <BackButton />
  }

  render () {
    const { items } = this.props

    return (
      <View style={styles.container}>
          <List items={pubs} handleSelectItem={this.handleItemPress} isFavourite/>
          <MainButtonRow handleMugPress={() => alert('Mug was pressed')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
