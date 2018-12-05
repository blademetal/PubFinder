import { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class CommentItem extends PureComponent {
  renderStars (stars) {
    const starArr = []
    for (var i = 1; i <= 5; i++) {
      if (i <= stars) {
        starArr.push(i)
      } else if (i > stars && i <= 5) {
        starArr.push(0)
      }
    }

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
         {starArr.map((prop, key) => {
            if (prop > 0) {
              return (
                <Image style={styles.star} key={key} source={require('../../assets/star_48.png')} />
              )
            } else {
              return (
                <Image style={styles.star} key={key} source={require('../../assets/blankStar.png')} />
              )
            }
        })}
       </View>
    )
  }

  render () {
    const { name, imageUrl, review, stars, id } = this.props

    return (
      <View style={styles.container}>
        <Image source={imageUrl === '' ? require('../../assets/defaultUser.png') : {uri: imageUrl}} style={styles.avatar}/>
        <View style={styles.body}>
          <View style={styles.userInfo}>
            <Text style={styles.name}>{name}</Text>
            {this.renderStars(stars)}
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.review}>{review}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#eee',
    minHeight: 50,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 7
  },
  avatar: {
    padding: 10,
    width: 40,
    height: 40
  },
  body: {
    flex: 1,
    paddingLeft: 10,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 15,
    fontWeight: '600'
  },
  reviewContainer: {
    paddingTop: 10,
    paddingLeft: 5,
    minHeight: 35
  },
  review: {
    fontSize: 16
  },
  star: {
    width: 10,
    height: 10
  }
})