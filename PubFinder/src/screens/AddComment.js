import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Image, Dimensions } from 'react-native'
import Navbar from '../components/Navbar'
import BackButton from '../components/BackButton'
import { colors } from '../config'
import StarRating from 'react-native-star-rating'
import { withNavigation } from 'react-navigation'

export default withNavigation(class AddComment extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 90
    },
    headerTintColor: '#fff',
    headerTitle: <Navbar pageName='' favourites={false} marginLeft={130} />,
    headerTitleStyle: {
      fontWeight: 'bold',
      paddingLeft: 150
    },
    headerLeft: <BackButton />
  }

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.navigation.state.params.item.myComment,
      rating: this.props.navigation.state.params.item.myStars
    }
  }

  onStarRatingPress = (rating) => this.setState({rating})
  onChangeText = (text) => this.setState({ text })

  render() {
    const { text } = this.state

    const changes = {'myStars': this.state.rating, 'myComment': this.state.text}
    
    return (
      // This moves children view with input field and submit button
      // up above the keyboard when it's active
      <View style={styles.container}>
        <View style={styles.starContainer}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.rating}
            selectedStar={this.onStarRatingPress}
            fullStarColor={'#ffd700'}
            starSize={35}
          />
        </View>
        <KeyboardAvoidingView behavior='position' >
          <View>
            <TextInput
              placeholder="Írd le a véleményed..."
              keyboardType="twitter" // keyboard with no return button
              autoFocus={true} // focus and show the keyboard
              multiline={true}
              style={styles.input}
              value={this.state.text}
              onChangeText={this.onChangeText} // handle input changes
              onSubmitEditing={this.onSubmitEditing} // handle submit event
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.sendContainer}>
          {this.state.text 
            ? <TouchableOpacity style={styles.send} onPress={() => this.props.navigation.navigate('Opinion', {item: Object.assign({}, this.props.navigation.state.params.item, changes)})} >
              <Image source={require('../../assets/send.png')} style={styles.send} />
            </TouchableOpacity>
            : null }
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  starContainer: {
    paddingRight: 150,
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    fontSize: 20
  },
  sendContainer: {
    flex: 1, 
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  send: {
    width: 70,
    height: 70
  }
})