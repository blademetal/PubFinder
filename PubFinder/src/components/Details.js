import { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating'

export default class Details extends PureComponent {
  render () {
    const { name, imageUrl, distance, open, address, stars, id, foods, beverages } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: imageUrl }} style={styles.avatar}/>
          <View style={styles.infos}>
            <View style={{paddingRight: 35}}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={this.props.stars}
                fullStarColor={'#ffd700'}
                starSize={22}
              />
            </View>
            <Text style={styles.infoText} >Nyitva: {open}-ig</Text>
            <View style={styles.dinnerIconContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dinner', {item: foods})} >
                <Image source={require('../../assets/foods.png')} style={styles.dinnerIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dinner', {item: beverages})} >
                <Image source={require('../../assets/beverages.png')} style={styles.dinnerIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.address}>{address}</Text>
        <View style={{ borderTopColor: '#ccc', borderTopWidth: 2, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.distance}>{distance} méterre van</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  avatar: {
    width: 175,
    height: 175
  },
  name: {
    paddingBottom: 20,
    fontSize: 27
  },
  infos: {
    flex: 1,
    paddingLeft: 10,
  },
  star: {
    width: 20,
    height: 20
  },
  infoText: {
    paddingTop: 10,
    fontSize: 15
  },
  address: {
    padding: 10,
    fontSize: 18
  },
  distance: {
    padding: 10,
    fontSize: 25
  },
  dinnerIconContainer: {
    flex: 1,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dinnerIcon: {
    width: 50,
    height: 50
  }
})