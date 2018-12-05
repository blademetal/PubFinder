import { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DinnerListItem extends PureComponent {
  render () {
    const { name, price } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{price} Ft</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  text: {
    fontSize: 18
  }
})