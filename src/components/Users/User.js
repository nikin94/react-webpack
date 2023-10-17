import { Link, useParams } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

const User = ({ user }) => {
  const { userId } = useParams()
  const { name, username, id } = user
  const src = 'https://i.pravatar.cc/40?u=' + username

  return (
    <Link to={'/user/' + id}>
      <ListItem
        sx={{
          alignItems: 'center',
          bgcolor: id === +userId ? 'primary.dark' : 'inherit',
          color: id === +userId ? 'primary.contrastText' : 'inherit',
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
    </Link>
  )
}

export default User
