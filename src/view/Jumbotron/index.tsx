import { Box, Typography } from '@mui/material'

export default function Jumbotron() {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='30vh' bgcolor='#C8E2E1' sx={{ backgroundImage: 'url("")', backgroundPosition: '50% 50%', backgroundSize: 'cover' }}>
        <Typography variant='h4'>최신 정보</Typography>
    </Box>
  )
}
