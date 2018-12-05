import { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { googleAPIKey } from '../config'
import pubs from '../mock/pubs'
import { withNavigation } from 'react-navigation'

export default withNavigation(class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 47.474162,
        longitude: 19.052652,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      },
      route: null
    }

    this.onRegionChange = this.onRegionChange.bind(this)
  }
  
  onRegionChange(region) {
    this.setState({ region })
  }

  onMarkerPress(markerData) {
    return (this.props.navigation.navigate('RouteMap', {item: markerData}))
  }
  
  render() {
    return (
      <View style={styles.container} >
        <MapView style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange} >
          {pubs.map(pub => (
            <Marker
              key={pub.id}
              coordinate={pub.marker.latlng}
              image={require('../../assets/marker.png')}
              title={pub.marker.title}
              onPress={e => this.onMarkerPress(e.nativeEvent)}
            />))}
        </MapView>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})