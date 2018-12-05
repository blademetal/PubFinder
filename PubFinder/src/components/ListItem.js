import { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import StarRating from 'react-native-star-rating'

export default withNavigation(class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: this.props.isFavourite
    };
  }

  onStarRatingPress(rating) {
    let value = this.state.isFavourite && Boolean(rating) ? 0 : 1
    this.setState({
      isFavourite: value
    });
  }

  render () {
    const { handleSelectItem, handleLike, name, imageUrl, distance, isFavourite, id } = this.props

    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceDetail', {item: this.props})} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image source={{ uri: imageUrl }} style={styles.avatar}/>
          <View style={styles.infos}>
            <View style={{flex: 1}}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
              </View>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Még {distance} m van hátra</Text>
              </View>
            </View>
            <View style={{paddingLeft: 10, paddingTop: 11}}>
              <StarRating
                  disabled={false}
                  maxStars={1}
                  rating={this.state.isFavourite ? 1 : 0}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                  fullStarColor={'#ffd700'}
                  starSize={35}
                />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 30,
    height: 80,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  avatar: {
    width: 70,
    height: 70
  },
  infos: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 5,
    flexDirection: 'row'
  },
  nameContainer: {
    flex: 1
  },
  name: {
    fontSize: 20
  },
  image: {
    width: 25,
    height: 25
  },
  distanceContainer: {
    paddingBottom: 5,
    height: 30,
    justifyContent: 'center'
  },
  distance: {
    fontSize: 16
  }
})