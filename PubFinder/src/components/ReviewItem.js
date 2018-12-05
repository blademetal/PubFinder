import { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import CommentList from './CommentList'
import { withNavigation } from 'react-navigation'
import StarRating from 'react-native-star-rating'

export default withNavigation(class ListItem extends Component {
  render () {
    const { name, myName, myStars, myComment, comments, id } = this.props

    console.log(this.props)

    const myOpinion = {
      name: myName,
      imageUrl: '',
      stars: myStars,
      review: myComment,
      id: 999
    }

    let newComments = comments.concat(myOpinion)

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={this.props.stars}
              fullStarColor={'#ffd700'}
              starSize={35}
              starStyle={{paddingRight: 5}}
            />
          </View>
          <View style={styles.plusContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddComment', {item: this.props})}>
              <Image source={require('../../assets/plus.png')} style={styles.plus} />
            </TouchableOpacity>
          </View>
        </View>
        <CommentList items={myStars === 0 ? comments : newComments}/>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5
  },
  name: {
    fontSize: 30
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15
  },
  star: {
    width: 25,
    height: 25,
    marginLeft: 5
  },
  plusContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  plus: {
    width: 50,
    height: 50
  }
})