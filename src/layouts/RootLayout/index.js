import { useEffect, useState, useCallback } from 'react'
import { Outlet, useLoaderData, useSearchParams } from 'react-router-dom'
import debounce from 'lodash.debounce'

import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ClearIcon from '@mui/icons-material/Clear'

import { Users, Header } from '../../components'

const RootLayout = () => {
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.up('sm'))

  const users = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('')
  const [username, setUsername] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])

  const updateUsers = useCallback(
    debounce(({ newSort, newUsername }) => {
      const _filteredUsers = users
        .filter(u => u.username.toLowerCase().includes(newUsername))
        .sort((a, b) => {
          const nameA = a.username.toLowerCase()
          const nameB = b.username.toLowerCase()
          const isAsc = newSort === 'asc'
          if (nameA === nameB) return 0
          if (nameA < nameB) return isAsc ? -1 : 1
          return isAsc ? 1 : -1
        })
      setFilteredUsers(_filteredUsers)
    }, 500),
    []
  )

  const handleChangeSort = () => {
    const _sort = sort === 'asc' ? 'desc' : 'asc'
    handleChangeQueryParam('sort', _sort)
    setSort(_sort)
  }

  const handleChangeUsername = _username => {
    handleChangeQueryParam('username', _username)
    setUsername(_username)
  }

  const handleChangeQueryParam = (param, value) => {
    value ? searchParams.set(param, value) : searchParams.delete(param)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    searchParams.get('sort') && setSort(searchParams.get('sort'))
    searchParams.get('username') && setUsername(searchParams.get('username'))
  })

  useEffect(() => {
    updateUsers({ newSort: sort, newUsername: username })
  }, [username, sort])

  const clearFilters = () => {
    setSort('')
    setUsername('')
    searchParams.delete('sort')
    searchParams.delete('username')
    setSearchParams()
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        maxWidth='lg'
        sx={{ position: 'relative', px: smScreen ? 3 : '0 !important' }}
      >
        <Grid container sx={{ minHeight: 'calc(100vh - 64px)' }}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ backgroundColor: '#b4e3ff4a', minHeight: 300 }}
          >
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Outlet />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1
              }}
            >
              <TextField
                label='Search'
                variant='outlined'
                size='small'
                fullWidth
                value={username}
                onChange={e => handleChangeUsername(e.target.value)}
                sx={{ bgcolor: 'transparent' }}
              />
              {(sort || username) && (
                <Tooltip title='Clear filters'>
                  <IconButton
                    onClick={clearFilters}
                    aria-label='clear'
                    sx={{ ml: 1 }}
                  >
                    <ClearIcon />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title='Sort by username'>
                <IconButton
                  onClick={handleChangeSort}
                  aria-label='sort'
                  sx={{ ml: 1 }}
                >
                  {sort === 'asc' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Tooltip>
            </Box>
            {username && !filteredUsers.length ? (
              <Alert severity='warning'>No users found</Alert>
            ) : (
              <Users users={filteredUsers} />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default RootLayout
