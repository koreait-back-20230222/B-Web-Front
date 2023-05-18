import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { PATH } from 'src/constant';

export default function Navigation() {

    const navigator = useNavigate();

    return (
        <Box display='flex' height='7.5vh' bgcolor='#153F4D' justifyContent='space-between' alignItems='center' p='0 10vw'>
            <Box color='#ffffff'>
                <Typography className='hover' onClick={() => navigator('/')}>Dev Talks</Typography>
            </Box>
            <Box>
                <Box display='flex' color='#ffffff'>
                    <Typography className='hover' mr='1vw' onClick={() => navigator(PATH.SIGN_IN)}>로그인</Typography>
                    <Typography className='hover' onClick={() => navigator(PATH.SIGN_UP)}>회원가입</Typography>
                </Box>
            </Box>
        </Box>
    );
}
