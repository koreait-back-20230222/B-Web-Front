import { Box, Typography } from '@mui/material';

export default function Navigation() {
    

    return (
        <Box display='flex' height='7.5vh' bgcolor='#153F4D' justifyContent='space-between' alignItems='center' p='0 10vw'>
            <Box color='#ffffff'>
                <Typography>Dev Talks</Typography>
            </Box>
            <Box>
                <Box display='flex' color='#ffffff'>
                    <Typography mr='1vw'>로그인</Typography>
                    <Typography>회원가입</Typography>
                </Box>
            </Box>
        </Box>
    );
}
