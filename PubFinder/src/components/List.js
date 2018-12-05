import { Component } from 'react'
import { FlatList, Text } from 'react-native'
import ListItem from './ListItem'

export default class List extends Component {
  constructor (props) {
    super(props)

    this.renderListItem = this.renderListItem.bind(this)
  }

  renderListItem ({ item }) {
    const { handleSelectItem } = this.props

    return (
      <ListItem {...item} handleSelectItem={handleSelectItem} handleLike={() => alert('Like ' + item.id)} />
    )
  }

  render () {
    const { items, isFavourite } = this.props

    let renderItems = isFavourite ? items.filter(item => item.isFavourite) : items

    return (
      <FlatList
        data={renderItems}
        renderItem={this.renderListItem}
        keyExtractor={(item) => item.id}
        navigation={this.props.navigation}
      />
    )
  }
}
