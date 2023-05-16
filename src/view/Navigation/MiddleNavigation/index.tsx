import { Box, Stack } from '@mui/material';
import Button from '@mui/material-next/Button';

export default function MiddleNavigation() {
  return (
    <Box height='10vh' display='flex' justifyContent='center' alignItems='center' color='rgba(0, 0, 0, 0.6)'>
        <Stack spacing={2} direction="row">
            <Button variant="text" color="secondary" size="large" sx={{ fontSize: '18px' }}>최신 정보</Button>
            <Button variant="text" color="secondary" size="large" sx={{ fontSize: '18px' }}>팀원 모집</Button>
            <Button variant="text" color="secondary" size="large" sx={{ fontSize: '18px' }}>선생님 매칭</Button>
            <Button variant="text" color="secondary" size="large" sx={{ fontSize: '18px' }}>Q & A</Button>
        </Stack>
    </Box>
  )
}
