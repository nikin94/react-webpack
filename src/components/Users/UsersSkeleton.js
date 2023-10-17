import { useCallback } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Skeleton from '@mui/material/Skeleton'

const UsersSkeleton = () => {
  const UserSkeleton = ({ skipDivider }) => {
    return (
      <>
        <Box sx={{ width: '100%', p: 2, display: 'flex' }}>
          <Skeleton
            variant='circular'
            width={40}
            height={40}
            sx={{ flex: 'none', mr: 1 }}
          />
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Skeleton
              variant='text'
              height={15}
              width={'90%'}
              sx={{ mb: 0.5 }}
            />
            <Skeleton variant='text' height={12} width={'60%'} />
            <Skeleton variant='text' height={10} width={'30%'} />
          </Box>
        </Box>
        {!skipDivider && <Divider variant='middle' component='li' />}
      </>
    )
  }

  const renderSkeleton = useCallback(() => {
    const skeleton = []
    const length = 10
    for (let i = 0; i < length; i++) {
      skeleton.push(<UserSkeleton key={i} skipDivider={i === length - 1} />)
    }

    return skeleton
  }, [])

  return renderSkeleton()
}

export default UsersSkeleton
