import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'

import User from './User'
import UsersSkeleton from './UsersSkeleton'

const Users = ({ users }) => {
  const renderUsers = () => {
    return users.map((user, index) => (
      <Box key={user.id}>
        <User user={user} />
        {index !== users.length - 1 && (
          <Divider variant='middle' component='li' />
        )}
      </Box>
    ))
  }

  return (
    <List sx={{ display: 'block' }}>
      {users?.length ? renderUsers() : <UsersSkeleton />}
    </List>
  )
}

export default Users
