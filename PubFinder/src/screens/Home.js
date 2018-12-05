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
import pubs from '../mock/pubs'

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 90
    },
    headerTintColor: '#fff',
    headerTitle: <Navbar pageName='PubFinder' favourites={true} />,
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: 100
    }
  }

  render () {
    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };
    
    const titleConfig = {
      title: 'PubFinder',
    };

    return (
      <View style={styles.container}>
          <View style={styles.mapContainer} />
          <List items={pubs} handleSelectItem={this.handleItemPress} />
          <MainButtonRow handleMugPress={() => alert('Mug was pressed')} handleMapPress={() => alert('Map was pressed')} />
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
  },
  mapContainer: {
    flex: 1,
    height: 200,
    width: '100%'
  }
})
