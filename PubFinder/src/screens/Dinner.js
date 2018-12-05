import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { colors } from '../config'
import { MapView, Location, Permissions } from 'expo'
const { Marker, Callout } = MapView
import Navbar from '../components/Navbar'
import BackButton from '../components/BackButton'
import MainButtonRow from '../components/MainButtonRow'
import DinnerList from '../components/DinnerList'
import pubs from '../mock/pubs'

export default class Dinner extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 90
    },
    headerTintColor: '#fff',
    headerTitle: <Navbar pageName='' favourites={false} marginLeft={125} />,
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

    return (
      <View style={styles.container}>
          <DinnerList items={item} />
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
