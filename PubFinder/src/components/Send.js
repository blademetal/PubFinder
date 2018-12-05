import { PureComponent } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation' 


export default withNavigation(class Send extends PureComponent {
  handleSending () {
    
    this.props.navigation.goBack()
  }

  render () {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
        <View style={styles.container}>
          <Image source={require('../../assets/backWhite.png')} style={styles.avatar}/>
        </View>
      </TouchableOpacity>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10
  },
  avatar: {
    width: 60,
    height: 60
  }
})