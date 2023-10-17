import api from 'src/lib/api'

export const albumsLoader = async ({ params }) => {
  const res = await fetch(`${api.USERS}/${params.userId}/albums`)
  return res.json()
}

export const albumLoader = async ({ params }) => {
  const res = await fetch(`${api.ALBUMS}/${params.albumId}/photos`)
  return res.json()
}

export const postsLoader = async ({ params }) => {
  const res = await fetch(`${api.USERS}/${params.userId}/posts`)
  return res.json()
}

export const usersLoader = async () => {
  const res = await fetch(api.USERS)
  return res.json()
}
