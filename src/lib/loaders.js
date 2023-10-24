import api from './api'

const settings = { mode: 'cors' }

export const albumsLoader = async ({ params }) =>
  fetch(`${api.USERS}/${params.userId}/albums`, settings)

export const albumLoader = async ({ params }) =>
  fetch(`${api.ALBUMS}/${params.albumId}/photos`, settings)

export const postsLoader = async ({ params }) =>
  fetch(`${api.USERS}/${params.userId}/posts`, settings)

export const usersLoader = async () => fetch(api.USERS, settings)
