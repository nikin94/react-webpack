import { useLoaderData, useParams } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import { BackButton } from 'components'

const Posts = () => {
  const posts = useLoaderData()
  const { userId } = useParams()

  const renderPosts = () => {
    return posts.map(({ body, title, id }) => (
      <Card
        key={id}
        sx={{
          p: 2,
          mb: 2,
          boxShadow: 3
        }}
      >
        <Typography
          variant='h5'
          component='h5'
          fontWeight='bold'
          sx={{ mb: 1 }}
        >
          {title}
        </Typography>
        <Typography color='text.secondary'>{body}</Typography>
      </Card>
    ))
  }

  return (
    <>
      <BackButton url={'/user/' + userId} />
      <Box
        sx={{
          p: 1,
          bgcolor: '#fff'
        }}
      >
        {renderPosts()}
      </Box>
    </>
  )
}

export default Posts
