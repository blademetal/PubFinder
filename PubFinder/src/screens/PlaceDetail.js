import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { colors } from '../config'
import { MapView, Location, Permissions } from 'expo'
const { Marker, Callout } = MapView
import Navbar from '../components/Navbar'
import Details from '../components/Details'
import ActionBar from '../components/ActionBar'
import BackButton from '../components/BackButton'
import MainButtonRow from '../components/MainButtonRow'
import pubs from '../mock/pubs'

export default class PlaceDetail extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 90
    },
    headerTintColor: '#fff',
    headerTitle: <Navbar pageName='' favourites={true} marginLeft={125} />,
    headerTitleStyle: {
      fontWeight: 'bold',
      paddingLeft: 150
    },
    headerLeft: <BackButton
        onPress={() => alert('This is a button!')} />
  }

  render () {
    /* console.log(this.props.navigation.state.params.item) */
    const { item } = this.props.navigation.state.params

    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };
    
    const titleConfig = {
      title: 'PubFinder',
    };

    return (
      <View style={styles.container}>
          <Details {...item} />
          <ActionBar item={item} />
          <MainButtonRow />
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
