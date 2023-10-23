import api from './api'

export const albumsLoader = async ({ params }) =>
  fetch(`${api.USERS}/${params.userId}/albums`)

export const albumLoader = async ({ params }) =>
  fetch(`${api.ALBUMS}/${params.albumId}/photos`)

export const postsLoader = async ({ params }) =>
  fetch(`${api.USERS}/${params.userId}/posts`)

export const usersLoader = async () => fetch(api.USERS)
