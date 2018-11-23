import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/actions'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

const ConnectedListItems = props => {
  const { test } = props
  return (
    <div>
      <Divider />
      <List>
        <ListItem button onClick={() => test('top_rated')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Top Rated" />
        </ListItem>

        <ListItem button onClick={() => test('popular')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Popular" />
        </ListItem>

        <ListItem button onClick={() => test('now_playing')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Now Playing" />
        </ListItem>

        <ListItem button onClick={() => test('upcoming')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Upcoming" />
        </ListItem>

        <ListItem button onClick={() => test('latest')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Latest" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {[ 'Artwork', 'TV Shows', 'Account' ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  test: name => dispatch(fetchData(name)),
})

const ListItems = connect(null, mapDispatchToProps)(ConnectedListItems)

export default ListItems
