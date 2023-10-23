import { useLoaderData, useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid'

import { BackButton } from '../../components'
import Album from './Album'

const Albums = () => {
  const albums = useLoaderData()
  const { userId } = useParams()

  const renderAlbums = () => {
    return albums.map(album => (
      <Grid key={album.id} item xs={4}>
        <Album album={album} />
      </Grid>
    ))
  }

  return (
    <>
      <BackButton url={'/user/' + userId} />
      <Grid container sx={{ height: '100%' }} spacing={2} p={2}>
        {renderAlbums()}
      </Grid>
    </>
  )
}

export default Albums
