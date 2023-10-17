import { useMemo, useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

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

import { Users, Header } from 'components'

const RootLayout = () => {
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.up('sm'))

  const [inputText, setInputText] = useState('')
  const [sort, setSort] = useState('asc')
  const users = useLoaderData()

  const filteredUsers = useMemo(() => {
    return users
      .filter(u => u.username.toLowerCase().includes(inputText.toLowerCase()))
      .sort((a, b) => {
        let nameA = a.username.toLowerCase()
        let nameB = b.username.toLowerCase()
        if (nameA === nameB) return 0
        if (nameA < nameB) return sort === 'asc' ? -1 : 1
        return sort === 'asc' ? 1 : -1
      })
  }, [inputText, sort])

  const changeSort = () => {
    if (sort === 'asc') return setSort('desc')
    setSort('asc')
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
                value={inputText}
                onChange={event => setInputText(event.target.value)}
                sx={{ bgcolor: 'transparent' }}
              />
              <Tooltip title='Sort by username'>
                <IconButton
                  onClick={changeSort}
                  aria-label='sort'
                  sx={{ ml: 1 }}
                >
                  {sort === 'asc' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Tooltip>
            </Box>
            {inputText && !filteredUsers.length ? (
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
