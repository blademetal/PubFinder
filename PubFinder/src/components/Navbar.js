import { PureComponent } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../config'
import FavouritesButton from './FavouritesButton'

export default class Navbar extends PureComponent {
  render () {
    const { pageName, favourites, marginLeft, items } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {pageName}
        </Text>
        {favourites
          ? <FavouritesButton text='Kedvencek' pressFavourite={() => alert('asdasd')} marginLeft={marginLeft} items={items}/>
          : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: colors.navbarBg
  },
  text: {
    color: '#fff',
    fontSize: 30
  },
  favour: {
    height: 20,
    width: 100
  }
})