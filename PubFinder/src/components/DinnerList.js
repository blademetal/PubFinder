import { PureComponent } from 'react'
import { FlatList, Text } from 'react-native'
import DinnerListItem from './DinnerListItem'

export default class DinnerList extends PureComponent {
  constructor (props) {
    super(props)

    this.renderListItem = this.renderListItem.bind(this)
  }

  renderListItem ({ item }) {
    return (
      <DinnerListItem {...item} />
    )
  }

  render () {
    const { items } = this.props

    return (
      <FlatList
        data={items}
        renderItem={this.renderListItem}
        keyExtractor={(item) => item.id}
        navigation={this.props.navigation}
      />
    )
  }
}
