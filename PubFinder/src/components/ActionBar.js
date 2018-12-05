import { PureComponent } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Share, Linking } from 'react-native'
import { withNavigation } from 'react-navigation'

export default withNavigation(class ActionBar extends PureComponent {
  handleSharePress () {
    Share.share({
      message: 'BAM: we\'re helping your business with awesome React Native apps',
      url: 'http://bam.tech',
      title: 'Wow, did you see that?'
    }, {
      dialogTitle: 'Share BAM goodness',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }

  render () {
    const { handleRoutePress, handleFBPress, item } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleSharePress}>
          <Image source={require('../../assets/actions/share.png')} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('RouteMap', {item: item.markerData})}>
          <Image source={require('../../assets/actions/route.png')} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL(item.url)}}>
          <Image source={require('../../assets/actions/fb.png')} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Opinion', {item: item})}>
          <Image source={require('../../assets/actions/opinion.png')} style={styles.image}/>
        </TouchableOpacity>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 30,
    justifyContent: 'space-between'
  },
  image: {
    width: 50,
    height: 50
  }
})