import { Route, createRoutesFromElements } from 'react-router-dom'
import { Albums, Posts } from '../components'
import { Album, Main, NotFound, Selection } from '../pages'
import { RootLayout } from '../layouts'
import { albumLoader, albumsLoader, postsLoader, usersLoader } from './loaders'

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />} loader={usersLoader}>
    <Route index element={<Main />} />
    <Route path='user/:userId'>
      <Route index element={<Selection />} />
      <Route path='albums'>
        <Route index element={<Albums />} loader={albumsLoader} />
        <Route path=':albumId' element={<Album />} loader={albumLoader} />
      </Route>
      <Route path='posts' element={<Posts />} loader={postsLoader} />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
)

export default routes
