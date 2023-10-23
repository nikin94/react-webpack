import { useParams } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

import { LinkWithQuery } from '../../components'

const User = ({ user }) => {
  const { userId } = useParams()
  const { name, username, id } = user
  const src = 'https://i.pravatar.cc/40?u=' + username

  return (
    <LinkWithQuery to={'/user/' + id}>
      <ListItem
        sx={{
          alignItems: 'center',
          bgcolor: id === Number(userId) ? 'primary.dark' : 'inherit',
          color: id === Number(userId) ? 'primary.contrastText' : 'inherit',
          transition: '.3s',
          '&:hover': {
            bgcolor: 'primary.light',
            color: 'primary.contrastText'
          }
        }}
      >
        <ListItemAvatar>
          <Avatar alt={name} src={src} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={name}
          primaryTypographyProps={{ fontWeight: 'bold' }}
          secondaryTypographyProps={{ sx: { color: 'inherit' } }}
        />
      </ListItem>
    </LinkWithQuery>
  )
}

export default User
