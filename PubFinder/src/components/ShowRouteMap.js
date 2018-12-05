import { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { googleAPIKey } from '../config'
import pubs from '../mock/pubs'
import { Location } from 'expo-location'
import { Permissions } from 'expo-permissions'

export default class ShowRouteMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 47.474162,
        longitude: 19.052652,
        latitudeDelta: 0.00822,
        longitudeDelta: 0.00421,
      },
      location: {
        coords: {
          "accuracy": 5,
          "altitude": 0,
          "altitudeAccuracy": -1,
          "heading": -1,
          "latitude": 47.785834,
          "longitude": 19.406417,
          "speed": -1
        }
      },
      route: null,
      showCurrent: false
    }

    this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentWillMount() {
    this.getLocationAsync();
  }
 
  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
 
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
      return;
    }
 
    const location = await Location.getCurrentPositionAsync({});
    console.log('location', location)
    this.setState({ location: location, showCurrent: true });
  }

  onRegionChange(region) {
    //this.setState({ region })
  }
  
  render() {
    console.log('stateLoc', this.state.location)

    return (
      <View style={styles.container} >
        <MapView style={styles.map}
          region={this.state.showCurrent ? this.state.coords : this.state.region}
          onRegionChange={this.onRegionChange} >
            <MapView.Marker
              image={require('../../assets/marker.png')} 
              coordinate={{latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude}} />
            <MapView.Marker
              image={require('../../assets/marker.png')} 
              coordinate={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}} />
            <MapViewDirections
                  origin={{latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude}}
                  destination={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}}
                  apikey={googleAPIKey}
                  mode='transit'
                  onReady={(result) => {
                    console.log(result)
                  }}
                  strokeWidth={3}
                  strokeColor="hotpink"/>
        </MapView>
      </View>
    )
  }
}

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