import { PureComponent } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

export default withNavigation(class MainButtonRow extends PureComponent {
  render () {
    const { handleMugPress, handleMapPress } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={[styles.subContainer, { backgroundColor: '#2db4aa' }]}>
          <View>
            <Image source={require('../../assets/beerMug.png')} style={styles.image} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeMap')} style={[styles.subContainer, { backgroundColor: '#f4511e' }]}>
          <View>
            <Image source={require('../../assets/mapIcon.png')} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#fa8585'
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mugBorder: {
    borderLeftWidth: 1,
    borderLeftColor: '#ccc'
  },
  image: {
    width: 50,
    height: 50
  }
})