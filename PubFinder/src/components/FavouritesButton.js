import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import pubs from '../mock/pubs'
import StarRating from 'react-native-star-rating'

export default withNavigation(class FavouritesButton extends PureComponent {
  render () {
    const { pressFavourite, text, marginLeft } = this.props

    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Favourites', {item: this.props})}>
        <View style={[styles.container, {marginLeft: marginLeft}]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {text}
            </Text>
          </View>
          <View style={styles.imageContainer} >
          <StarRating
                  disabled={true}
                  maxStars={1}
                  rating={1}
                  fullStarColor={'#ffd700'}
                  starSize={25}
                />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#2db4aa'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  image: {
    width: 25,
    height: 25
  }
})
