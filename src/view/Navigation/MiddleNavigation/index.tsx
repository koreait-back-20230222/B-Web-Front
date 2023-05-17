import { Box, Stack, Button } from '@mui/material';
// import Button from '@mui/material-next/Button';
import { useNavigate } from 'react-router-dom';

export default function MiddleNavigation() {

  const navigator = useNavigate();

  return (
    <Box height='10vh' display='flex' justifyContent='center' alignItems='center' color='rgba(0, 0, 0, 0.6)'>
        <Stack spacing={2} direction="row">
            <Button variant="text" size="large" sx={{ fontSize: '18px', color: '#153F4D', fontWeight: 700 }} onClick={() => navigator('/lates-information')}>최신 정보</Button>
            <Button variant="text" size="large" sx={{ fontSize: '18px', color: '#153F4D', fontWeight: 700 }} onClick={() => navigator('/lates-information')}>팀원 모집</Button>
            <Button variant="text" size="large" sx={{ fontSize: '18px', color: '#153F4D', fontWeight: 700 }} onClick={() => navigator('/lates-information')}>선생님 매칭</Button>
            <Button variant="text" size="large" sx={{ fontSize: '18px', color: '#153F4D', fontWeight: 700 }} onClick={() => navigator('/lates-information')}>Q & A</Button>
        </Stack>
    </Box>
  )
}
