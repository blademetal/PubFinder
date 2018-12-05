import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { colors } from '../config'
import { MapView, Location, Permissions } from 'expo'
const { Marker, Callout } = MapView
import Navbar from '../components/Navbar'
import ReviewItem from '../components/ReviewItem'
import ActionBar from '../components/ActionBar'
import BackButton from '../components/BackButton'
import MainButtonRow from '../components/MainButtonRow'
import pubs from '../mock/pubs'

export default class Opinion extends Component {
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
    headerLeft: <BackButton />
  }

  render () {
    const { item } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <ReviewItem {...item} />
        </View>
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
